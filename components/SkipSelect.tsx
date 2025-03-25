import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FormTracker } from "core/constants";
import { SELECT } from "components/SELECT";
import PERMIT from "components/PERMIT";

/**
 * Enum representing available screens in the skip hiring workflow
 */
enum SkipScreens {
  SELECT = "SELECT",
  PERMIT = "PERMIT",
}

/**
 * Main component handling skip selection and permit acquisition flow
 * Manages state transitions between different workflow steps
 */
export function SkipSelect() {
  // Track current active screen in the workflow
  const [step, setStep] = useState<SkipScreens>(SkipScreens.SELECT);

  // Store user's selected skip details
  const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);

  // Fetch available skips using React Query
  const {
    data: skips,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["skips"],
    queryFn: fetchSkips,
    retry: 2, // Retry failed requests twice before showing error
  });

  /**
   * Handles navigation to permit screen after skip selection
   */
  const handleContinue = () => {
    if (selectedSkip) {
      setStep(SkipScreens.PERMIT);
    }
  };

  // Display loading state while fetching data
  if (isLoading)
    return <p className="text-center mx-auto py-[25%]">Loading skips...</p>;

  // Display error state if data fetching fails
  if (error)
    return (
      <p className="text-center mx-auto py-[25%]">
        Error loading skips: {error.message}
      </p>
    );

  return (
    <section className="w-full h-full overflow-hidden">
      {/* background gradient */}
      <div className="absolute md:flex hidden z-0 bottom-[50%] left-[50%] w-[400px] h-[400px] bg-[#000337] rounded-full blur-[100vh]" />

      {/* Progress indicator showing current step in multi-step form, full form was not asked to be built so this is just a display of the new UI */}
      <div className="flex md:w-[80%] w-[100%] md:ml-[15%] ml-[4.3%] py-10">
        {FormTracker.map((item, index) => (
          // Individual progress step with connecting line
          <div key={item.id} className="flex w-[100%] items-center">
            <div className="flex rounded-[100%] md:p-4 p-2 bg-[#fffffff1]">
              {item.Icon && (
                <item.Icon className="text-[#5560c3] md:w-5 w-4 md:h-5 h-4" />
              )}
            </div>

            {/* Connecting line between steps (except last item) */}
            {index !== FormTracker.length - 1 && (
              <div className="w-full h-[2px] bg-[#fafafa]" />
            )}
          </div>
        ))}
      </div>

      {/* Conditional rendering based on current workflow step */}
      {step === SkipScreens.SELECT && (
        <SELECT
          skips={skips}
          selectedSkip={selectedSkip}
          setSelectedSkip={setSelectedSkip}
          handleContinue={handleContinue}
        />
      )}

      {step === SkipScreens.PERMIT && (
        <PERMIT
          step={step}
          setStep={setStep}
          SkipScreens={SkipScreens}
          {...selectedSkip}
        />
      )}
    </section>
  );
}

/**
 * Service function for fetching skip data from API
 * @returns Promise containing skip data array
 * @throws Error when API response is not OK
 */
async function fetchSkips(): Promise<SkipData[]> {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch skips: Server responded with status " + response.status
    );
  }

  return response.json();
}
