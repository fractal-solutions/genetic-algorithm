### Genetic Algorithm Report
## Introduction
The Genetic Algorithm (GA) is a versatile optimization algorithm inspired by the process of natural selection. It is widely used for solving optimization problems in various domains. The purpose of this report is to document the design, implementation, and application of a genetic algorithm developed for the AI Programming assignment.

## Implementation
The genetic algorithm is implemented in JavaScript and follows a modular structure for easy adaptation to different optimization problems. The core components include:

# Chromosome Representation
The chromosomes are represented as strings, with each character corresponding to a gene. The generateRandomChromosome function generates random chromosomes for the initial population.

# Population Initialization
The initial population is generated using the initializePopulation function, which creates a set number of random chromosomes.

# Fitness Function
The fitnessFunction evaluates the fitness of a chromosome by comparing it to a target string. The higher the fitness, the more similar the chromosome is to the target.

# Selection
A tournament selection mechanism is employed in the selection function to choose parents for crossover. The function randomly selects individuals from the population and chooses the one with the highest fitness.

# Crossover
The crossover function combines the genetic material of two parent chromosomes to create one or more offspring. The crossover point is randomly determined.

# Mutation
The mutation function introduces small random changes to a chromosome by altering a single gene.

# Evolution
The evolve function orchestrates the evolution of the population for one generation by selecting parents, performing crossover, and applying mutation.

## Running the Algorithm
The run function runs the genetic algorithm for a specified number of generations. It prints the best individual in each generation along with its fitness.

## Example Usage
An example application of the genetic algorithm is demonstrated in finding a string that matches a target string. The algorithm evolves a population of strings over multiple generations to approximate the target string.