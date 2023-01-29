function solve(input) {
    if (input.dizziness) {
        input.levelOfHydrated += (0.1 * Number(input.weight) * Number(input.experience));
        input.dizziness = false;
    }

    return input;
}

solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }  
  );