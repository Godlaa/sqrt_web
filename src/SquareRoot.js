import Big from 'big.js';
import Complex from 'complex.js';

class SquareRoot {

        constructor(value, accuracy){
            this.value = value;
            this.accuracy = Number(accuracy);
        }

        returnWithAccuracy(value){
            if(isNaN(value)) return null;
            if(value instanceof Big) {
                if(value > 1e+21) return value.toExponential(this.accuracy);
                return value.toFixed(this.accuracy);
            }
            if(value instanceof Complex) {
                const re = value.re.toFixed(this.accuracy);
                const im = value.im.toFixed(this.accuracy);
                const answer = re + ' + ' + im + 'i';
                return answer;
            }
        }

        calc(){
            let value = this.value;
            if (value === '') return null;
            else if(value.includes('i')) {
                try {
                    let complexNumber = new Complex(value);
                    return this.returnWithAccuracy(complexNumber.sqrt());
                }
                catch (error) {
                    return null;
                }
            }
            else {
                try {
                    value = eval(value);
                    const big_num = new Big(value);
                    if (big_num.lt(0)) return null;
                    return this.returnWithAccuracy(big_num.sqrt());
                }
                catch (error){
                    return null;
                }
            }
        }
}

export default SquareRoot;