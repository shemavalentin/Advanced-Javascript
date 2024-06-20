// Let's use Encapsulation to demonstrate the importance  of CLOSURES

const makeNuclearBomb = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "🔆";
  };

  // to make this working we need a function to setTimeout
  // and it is going to keep on running
  // run pasaTime by encreamenting the timeWithoutDestruction

  setInterval(passTime, 1000);

  // Now let's return something from this function as now it is not returning anything
  return {
    // returning objct
    //launch: launch, // Now let's hide(encapsulate) this function to revoke the power to launch
    totalPeaceTime: totalPeaceTime,
  };
};

const ohno = makeNuclearBomb();
ohno.totalPeaceTime();

/* Now what is encapsulation: encapsulation is hiding of information 
that is unnecessary to be seen by the outside world or manupulated.

this gets into the idea of principle of least of provileges. a big security 
principle when it comes to programming where you don't just want to give 
any body access to your API, to special function or variables.
*/
