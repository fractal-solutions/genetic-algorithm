class GeneticAlgorithm {
    constructor(populationSize, chromosomeLength, targetString) {
      this.populationSize = populationSize;
      this.chromosomeLength = chromosomeLength;
      this.targetString = targetString;
      this.population = this.initializePopulation();
    }
  
    // Helper function to generate a random chromosome
    generateRandomChromosome() {
      let chromosome = '';
      for (let i = 0; i < this.chromosomeLength; i++) {
        chromosome += String.fromCharCode(Math.floor(Math.random() * 94) + 32); // ASCII printable characters
      }
      return chromosome;
    }
  
    // Initialize the population with random chromosomes
    initializePopulation() {
      const population = [];
      for (let i = 0; i < this.populationSize; i++) {
        population.push(this.generateRandomChromosome());
      }
      return population;
    }
  
    // Calculate the fitness of a chromosome by comparing it to the target string
    fitnessFunction(chromosome) {
      let fitness = 0;
      for (let i = 0; i < this.chromosomeLength; i++) {
        if (chromosome[i] === this.targetString[i]) {
          fitness++;
        }
      }
      return fitness;
    }
  
    // Select parents using a simple tournament selection
    selection() {
      const tournamentSize = 5;
      let selectedParents = [];
      for (let i = 0; i < tournamentSize; i++) {
        const randomIndex = Math.floor(Math.random() * this.populationSize);
        selectedParents.push(this.population[randomIndex]);
      }
      selectedParents = selectedParents.sort((a, b) => this.fitnessFunction(b) - this.fitnessFunction(a));
      return selectedParents[0];
    }
  
    // Crossover two parents to create an offspring
    crossover(parent1, parent2) {
      const crossoverPoint = Math.floor(Math.random() * this.chromosomeLength);
      const child = parent1.slice(0, crossoverPoint) + parent2.slice(crossoverPoint);
      return child;
    }
  
    // Mutate a chromosome by randomly changing one character
    mutation(chromosome) {
      const mutationPoint = Math.floor(Math.random() * this.chromosomeLength);
      const mutatedChar = String.fromCharCode(Math.floor(Math.random() * 94) + 32);
      return chromosome.substring(0, mutationPoint) + mutatedChar + chromosome.substring(mutationPoint + 1);
    }
  
    // Evolve the population for one generation
    evolve() {
      const newPopulation = [];
      for (let i = 0; i < this.populationSize; i++) {
        const parent1 = this.selection();
        const parent2 = this.selection();
        const child = this.crossover(parent1, parent2);
        const mutatedChild = this.mutation(child);
        newPopulation.push(mutatedChild);
      }
      this.population = newPopulation;
    }
  
    // Run the genetic algorithm for a given number of generations
    run(generations) {
      for (let i = 0; i < generations; i++) {
        this.evolve();
        const bestIndividual = this.population.reduce((best, current) => {
          return this.fitnessFunction(current) > this.fitnessFunction(best) ? current : best;
        }, this.population[0]);
  
        console.log(`Generation ${i + 1}: ${bestIndividual} (Fitness: ${this.fitnessFunction(bestIndividual)})`);
      }
    }
  }

  class NumericGeneticAlgorithm extends GeneticAlgorithm {
    fitnessFunction(chromosome) {
      // Assume targetValue is a predefined target
      const targetValue = 42;
      return 1 / Math.abs(parseFloat(chromosome) - targetValue);
    }
  }

  class BinaryGeneticAlgorithm extends GeneticAlgorithm {
    generateRandomChromosome() {
      let chromosome = '';
      for (let i = 0; i < this.chromosomeLength; i++) {
        chromosome += Math.random() < 0.5 ? '0' : '1';
      }
      return chromosome;
    }
  
    fitnessFunction(chromosome) {
      // Implement a fitness function for binary strings
      // Example: Count the number of '1's in the string
      return chromosome.split('1').length - 1;
    }
  }

  class CombinatorialGeneticAlgorithm extends GeneticAlgorithm {
    generateRandomChromosome() {
      // Implement logic for generating a random permutation
      const array = Array.from({ length: this.chromosomeLength }, (_, index) => index + 1);
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array.join('');
    }
  
    fitnessFunction(chromosome) {
      // Implement a fitness function for combinatorial optimization
      // Example: Evaluate the quality of a permutation based on a specific criterion
      return chromosome.split('').reverse().join('');
    }
  }
  




  // Example usage:
  const targetString = "Hello World!";
  const ga = new GeneticAlgorithm(100, targetString.length, targetString);
  ga.run(200);


  const numericGA = new NumericGeneticAlgorithm(100, 1, null);
  //numericGA.run(100);

  const binaryGA = new BinaryGeneticAlgorithm(100, 10, null);
  //binaryGA.run(50);
  