import { interval, of } from 'rxjs';
import { expand, take } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/expand
// Example 1: Add one for each invocation

//emit 2
const src$ = of(2);
const example = src$.pipe(
  //recursively call supplied function
  expand((val) => {
    //2,3,4,5,6
    console.log(`Passed value: ${val}`);
    //3,4,5,6
    return of(1 + val);
  }),
  //call 5 times
  take(5)
);
const subscribe = example.subscribe((val) => console.log(`RESULT: ${val}`));
/*
	"RESULT: 2"
	"Passed value: 2"
	"RESULT: 3"
	"Passed value: 3"
	"RESULT: 4"
*/
//output: 2,3,4,5,6
