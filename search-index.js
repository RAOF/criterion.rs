var searchIndex = {};
searchIndex["criterion"] = {"doc":"A statistics-driven micro-benchmarking library written in Rust.","items":[[3,"Fun","criterion","Representing a function to benchmark together with a name of that function. Used together with `bench_functions` to represent one out of multiple functions under benchmark.",null,null],[3,"Bencher","","Helper struct to time routines",null,null],[3,"Criterion","","The benchmark manager",null,null],[11,"new","","Create a new `Fun` given a name and a closure",0,{"inputs":[{"name":"str"},{"name":"f"}],"output":{"name":"fun"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"bencher"}}],[11,"iter","","Times a `routine` by executing it many times and timing the total elapsed time.",1,{"inputs":[{"name":"self"},{"name":"r"}],"output":null}],[11,"iter_with_setup","","Times a `routine` that requires some `setup` on each iteration.",1,{"inputs":[{"name":"self"},{"name":"s"},{"name":"r"}],"output":null}],[11,"iter_with_large_drop","","Times a `routine` by collecting its output on each iteration. This avoids timing the destructor of the value returned by `routine`.",1,{"inputs":[{"name":"self"},{"name":"r"}],"output":null}],[11,"iter_with_large_setup","","Times a `routine` that needs to consume its input by first creating a pool of inputs.",1,{"inputs":[{"name":"self"},{"name":"s"},{"name":"r"}],"output":null}],[11,"default","","Creates a benchmark manager with the following default settings:",2,{"inputs":[],"output":{"name":"criterion"}}],[11,"sample_size","","Changes the size of the sample",2,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"criterion"}}],[11,"warm_up_time","","Changes the warm up time",2,{"inputs":[{"name":"self"},{"name":"duration"}],"output":{"name":"criterion"}}],[11,"measurement_time","","Changes the measurement time",2,{"inputs":[{"name":"self"},{"name":"duration"}],"output":{"name":"criterion"}}],[11,"nresamples","","Changes the number of resamples",2,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"criterion"}}],[11,"noise_threshold","","Changes the noise threshold",2,{"inputs":[{"name":"self"},{"name":"f64"}],"output":{"name":"criterion"}}],[11,"confidence_level","","Changes the confidence level",2,{"inputs":[{"name":"self"},{"name":"f64"}],"output":{"name":"criterion"}}],[11,"significance_level","","Changes the significance level",2,{"inputs":[{"name":"self"},{"name":"f64"}],"output":{"name":"criterion"}}],[11,"with_plots","","Enables plotting",2,{"inputs":[{"name":"self"}],"output":{"name":"criterion"}}],[11,"without_plots","","Disabled plotting",2,{"inputs":[{"name":"self"}],"output":{"name":"criterion"}}],[11,"can_plot","","Checks if plotting is possible",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"bench_function","","Benchmarks a function",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"f"}],"output":{"name":"criterion"}}],[11,"bench_functions","","Benchmarks multiple functions",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"vec"},{"name":"i"}],"output":{"name":"criterion"}}],[11,"bench_function_over_inputs","","Benchmarks a function under various inputs",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"f"},{"name":"i"}],"output":{"name":"criterion"}}],[11,"bench_program","","Benchmarks an external program",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"command"}],"output":{"name":"criterion"}}],[11,"bench_program_over_inputs","","Benchmarks an external program under various inputs",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"f"},{"name":"i"}],"output":{"name":"criterion"}}],[11,"summarize","","Summarize the results stored under the `.criterion/${id}` folder",2,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"criterion"}}]],"paths":[[3,"Fun"],[3,"Bencher"],[3,"Criterion"]]};
initSearch(searchIndex);
