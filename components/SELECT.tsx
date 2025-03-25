import SkipCard from "./SkipCard";

// Defines the properties required by the SELECT component
interface SelectProps {
  skips: SkipData[]; // List of available skips to display
  selectedSkip: SkipData | null; // Currently chosen skip
  setSelectedSkip: (skip: SkipData | null) => void; // Updates selected skip
  handleContinue: () => void; // Proceeds to next step
}

// Main component for skip size selection
export function SELECT({
  skips,
  selectedSkip,
  setSelectedSkip,
  handleContinue,
}: SelectProps) {
  return (
    <main className="relative z-10 flex flex-col  w-full items-center justify-center ">
      {/* Skip selection grid section */}
      <section className="flex flex-col items-center justify-center w-[80%] sm:w-[90%] md:w-[80%] gap-6">
        <div className="flex flex-col text-center">
          <h3>Choose Your Skip Size</h3>
          <p>Select the skip size that best suits your needs</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full pb-20">
          {skips.map((skip: SkipData) => (
            <SkipCard
              key={skip.id} // Unique identifier for React rendering
              {...skip} // Spread skip details to card component
              isSelected={selectedSkip?.id === skip.id} // Highlight selected state
              onSelect={() => setSelectedSkip(skip)} // Handle selection click
            />
          ))}
        </div>
      </section>

      {/* Sticky footer with selection summary */}
      {selectedSkip && (
        <div className="sticky z-20 bottom-0 left-0 w-full flex items-center justify-center md:h-[13vh] h-[16vh] bg-[#000000] border-[1px] border-[#88868633] rounded-t-[12px]">
          <div className="md:w-[80%] w-[97%] flex md:flex-row flex-col justify-center items-center md:gap-4 gap-0">
            {/* Selected skip details */}
            <div>
              <div className="flex gap-2 md:text-[18px] text-[12px]">
                <p className="text-[#5560c3]">
                  <span className="text-white">Size selected:</span>{" "}
                  {selectedSkip?.size} Yards
                </p>
                <p className="text-[#5560c3]">
                  <span className="text-white">Hiring Period:</span>{" "}
                  {selectedSkip?.hire_period_days} days
                </p>
                <p className="text-[#5560c3]">
                  <span className="text-white">Cost per week:</span> £{" "}
                  {selectedSkip?.price_before_vat}
                </p>
              </div>
            </div>

            {/* Continue button */}
            <div>
              <button
                disabled={!selectedSkip}
                onClick={handleContinue}
                className={`my-6 rounded-[12px] px-4 py-2 text-white md:text-[16px] text-[13px] transition-colors hover:cursor-pointer ${
                  selectedSkip
                    ? "bg-[#6A71F3] hover:bg-[#5560c3]" // Active state
                    : "bg-gray-400 cursor-not-allowed" // Disabled state
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
