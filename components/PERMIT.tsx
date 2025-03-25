import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { CiClock1 } from "react-icons/ci";
import { LuCircleAlert } from "react-icons/lu";

// Defines what props the PERMIT component needs to work properly
interface PermitProps {
  step: any; // Current active step in the form
  setStep: Dispatch<SetStateAction<any>>; // Function to change the step
  SkipScreens: {
    // Object holding available screen options
    SELECT: string;
    PERMIT: string;
  };
  allowed_on_road?: boolean; // Determines if skip can be placed on public roads
}

// Main component for handling permit requirements
const PERMIT: React.FC<PermitProps> = ({
  step,
  setStep,
  SkipScreens,
  allowed_on_road,
}) => {
  // Tracks user's choice between public/private placement
  const [permitChoice, setPermitChoice] = useState("");

  // Handlers for different placement choices
  const handlePublicClick = () => {
    setPermitChoice("public");
  };

  const handlePrivateClick = () => {
    setPermitChoice("private");
  };

  // Returns user to skip selection screen
  const handleBack = () => {
    setStep(SkipScreens.SELECT);
  };

  return (
    <section className="relative z-10 flex flex-col gap-14 w-full items-center justify-center  pb-4">
      {/* Main placement options section */}
      <section className="flex flex-col items-center justify-center w-[80%] gap-6">
        <div className="flex flex-col text-center">
          <h3>Where will the skip be placed?</h3>
          <p className="text-[14px] sm:text-[15px]">
            This helps us determine if you need a permit for your skip
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full">
          {/* Private property option - always available */}
          <div
            onClick={handlePrivateClick}
            className={`flex items-center w-full p-1 hover:cursor-pointer`}
          >
            <div
              className={`flex flex-col gap-3 w-full border-[1px] transition-all duration-300 rounded-[12px] p-3 ${
                permitChoice === "private"
                  ? "border-[#6A71F3]"
                  : "border-[#88868633]"
              }`}
            >
              <div className="flex flex-col gap-4 px-2">
                {/* Visual elements for private option */}
                <div>
                  <img
                    src="/icons/private.webp"
                    alt="private property"
                    width={50}
                    height={50}
                    className="bg-[#6A71F3] rounded-full p-1"
                  />
                </div>
                <div>
                  <p className="text-[18px] font-bold">Private Property</p>
                  <p className="text-[#888686] text-[15px]">
                    Driveway or Private Land
                  </p>
                </div>
                <div>
                  <p className="text-[14px]">
                    No permit required when placed on your private property
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Public road option - depends on skip type */}
          <div
            onClick={allowed_on_road ? handlePublicClick : undefined}
            className={`flex items-center p-1 w-full ${
              allowed_on_road
                ? "hover:cursor-pointer"
                : "cursor-not-allowed opacity-40"
            }`}
          >
            <div
              className={`flex flex-col gap-3 w-full border-[1px] transition-all duration-300 rounded-[12px] p-3 ${
                permitChoice === "public" && allowed_on_road
                  ? "border-[#6A71F3]"
                  : "border-[#88868633]"
              }`}
            >
              <div className="flex flex-col gap-4 px-2">
                {allowed_on_road ? (
                  // Normal public road content
                  <>
                    <div>
                      <img
                        src="/icons/public.webp"
                        alt="public property"
                        width={50}
                        height={50}
                        className="bg-[#6A71F3] rounded-full p-1"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] font-bold">Public Road</p>
                      <p className="text-[#888686] text-[15px]">
                        Street or Public Road
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px]">
                        A permit is required when placing a skip on a public
                        road
                      </p>
                    </div>
                  </>
                ) : (
                  // Shown when public placement isn't allowed
                  <>
                    <div>
                      <img
                        src="/icons/public.webp"
                        alt="public property"
                        width={50}
                        height={50}
                        className="bg-[#6A71F3] rounded-full p-1"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] font-bold">Public Road</p>
                      <p className="text-[#888686] text-[15px]">
                        Street or Public Road
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px]">
                        A permit is required when placing a skip on a public
                        road
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional information based on selection */}
      {permitChoice === "public" && allowed_on_road ? (
        // Permit requirements info
        <section className="lg:w-[40%] w-[80%] flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col bg-[#af892955] border-[#88868633] border-[1px] rounded-[12px] p-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <LuCircleAlert />
                <h4 className="text-[15px] font-bold">Permit Required</h4>
              </div>
              <div>
                <p className="text-[14px]">
                  A permit is required when placing a skip on a public road.
                  We'll handle the permit application process for you. An
                  additional fee of £84.00 will be added to your order.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#6a71f322] border-[#88868633] border-[1px] rounded-[12px] p-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CiClock1 />
                <h4 className="text-[15px] font-bold">Processing Time</h4>
              </div>
              <div>
                <p className="text-[14px]">
                  The council requires 5 working days' notice to process permit
                  applications. Please plan your delivery date accordingly.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Error message when public placement isn't allowed
        <div
          className={`${
            allowed_on_road
              ? "hidden"
              : "lg:w-[40%] w-[80%] flex flex-col gap-4 justify-center items-center text-red-500"
          }`}
        >
          <div className="flex flex-col bg-[#af292955] border-[#88868633] border-[1px] rounded-[12px] p-3">
            <div className="flex gap-2 ">
              <LuCircleAlert />
              <p className="font-bold mb-2">Road Placement Not Available</p>
            </div>
            <p className="text-sm text-white">
              The skip size that you've chosen cannot be placed on public roads
              due to road safety regulations. Please ensure you have adequate
              private space or select a different skip size.
            </p>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-center items-center w-[20%]">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center justify-center p-3 rounded-[12px] bg-[#88868633] hover:cursor-pointer"
          >
            Back
          </button>

          <button
            type="button"
            className="flex items-center justify-center p-3 rounded-[12px]  bg-[#6A71F3] hover:cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default PERMIT;
