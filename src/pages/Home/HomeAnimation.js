import TypeAnimation from "react-type-animation";

const domains = [
  "Designing",

  "UI/UX",

  "Web Development",

  "Open Source",

  "Mentoring and Teaching",

  "Sales",
  
  "Network Marketing",
];

var designSequence = [];
for (var i = 0; i < domains.length; i++) {
  designSequence.push(domains[i]);
  designSequence.push(1000);
}
designSequence.push("");

function HomeAnimation() {
  return (
    <div>
      I'm into{" "}
      <TypeAnimation
        cursor={true}
        sequence={designSequence}
        wrapper="span"
        repeat={Infinity}
      />
      .
    </div>
  );
}

export default HomeAnimation;
