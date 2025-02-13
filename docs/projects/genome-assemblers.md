# Genome Assemblers Comparison
A Docker image based workflow for the comparison of several genome assemblers.

## Intro
Genome assembly is a computational representation of a genome sequence and it is a pivotal step in genome analysis. Given the limitations of current sequencing technologies, where it's impractical to sequence entire chromosomes, genome assembly becomes essential for studying genetic structures comprehensively. 

Genome reconstruction is possible due to the existence of different sequence assemblers that use different algorithms to achieve this reconstruction, each with its advantages and limitations. These technologies break the genome into smaller fragments and sequence these fragments individually. These sequenced fragments are known as "reads".

Among these algorithms, De Bruijn graph-based approaches have gained prominence due to their computational efficiency and ability to manage large volumes of data. These algorithms segment the DNA sequences into overlapping k-mers, forming a graph where nodes represent k-mers and edges represent the overlaps between them. 

The workflow is setup to compare the following assemblers:
* [ABySS](https://github.com/bcgsc/abyss)
* [Trinity](https://github.com/trinityrnaseq/trinityrnaseq)
* [SPAdes](https://github.com/ablab/spades)

## Requirements
* Docker
* Python 3

## Instructions 

### 1. Build image and run docker container
* Windows: Run the `./run_container.bat`
* Linux & MacOS: Run the `./run_container.sh`

This will build the docker image and automatically run the container in the terminal.

You can use this script to open the container again.


### 2. Get the SRA data
In the container terminal run:
* 1st `./prefetch_data.sh`
* 2nd `./fasterq_dump.sh`

You will find the `cache` and `fastq` folders in your directory.

You will only need to do this once!

### 3. Run the assemblers
In order to run all the assemblers all you have to do is:

`run_all <path to the fastq folder> <RAM usage>`

Example: `run_all fastq 16G`

This will start the genome assembly for every data sample.

### 4. Evaluate the contigs
Keep in mind that some assemblies might fail without warning and so some evaluations are not present.

The evaluation is done using the Quast tool `https://quast.sourceforge.net/`.

To evaluate the model run `./quast_eval.sh`

### 5. Plot monitor graphs (experimental)
A monitor program was implemented to keep track of the RAM memory usage and the CPU usage. It is experimental and the results tend to vary.

This step attempts to plot the RAM and CPU usage over time for each assembly tool run.

Install python requirements:
* `pip install -r requirements.txt [--break-system-packages]`

Get the geckodriver and setup PATH:
* https://github.com/mozilla/geckodriver/releases

Plot graphs:
* Run: `python3 plot_monitor.py`

## Results
The experiment results can be found here [Evaluation and Assembly Output](https://drive.google.com/drive/folders/1spAZ4o9QbmJz_wFbOouq3-vzsJaqpFvK?usp=sharing)
