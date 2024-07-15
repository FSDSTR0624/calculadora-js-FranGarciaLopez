const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const product = (a, b) => a * b;
const division = (a, b) => a / b;

const squareRoot = (a) => {
          if (a < 0) {
                    let sqareResult = Math.sqrt(Math.abs(a));
                    if(sqareResult === 0) {
                              return '0';
                    }

                    if(sqareResult === 1) {
                              return 'i';
                    }
                    return sqareResult.toFixed(4) + 'i';
          } else {
                    let sqareResult = Math.sqrt(a);
                    return sqareResult.toFixed(4);
          }
};

const complexSquareRoot = (a) => {
          const real = a.real;
          const imaginary = a.imaginary;

          const realPart = squareRoot((real + Math.sqrt(real * real + imaginary * imaginary)) / 2);
          const imaginaryPart = squareRoot((Math.sqrt(real * real + imaginary * imaginary) - real) / 2);

          return { real: realPart, imaginary: imaginaryPart };
}

const percentage = (a, b) => {
          if (a === 0 || b === 0) {
                    return 0;
          }
          if (!b) {
                    return a / 100;
          }
          return (a * b) / 100;
}

const neperianLogarithm = (a) => {
          let result = Math.log(a);
          if (result === 0) {
                    return '0';
          }
          return result.toFixed(4);
}

const factorial = (a) => {
          if (a === 0) {
                    return 1;
          }
          return a * factorial(a - 1);
}

const power = (a, b) => {
          let result = Math.pow(a, b);
          if (result === 0) {
                    return '0';
          }
          return result.toFixed(4);
}

const clearDisplay = () => {
          document.getElementById('displayInput').value = '';
}

const deleteLast = () => {
          const display = document.getElementById('displayInput');
          display.value = display.value.slice(0, -1);
}

const displayValue = (value) => {
          document.getElementById('displayInput').value += value;
}

const calculate = () => {
          const display = document.getElementById('displayInput');

          try {
                    const value = display.value;

                    if (value.includes('√')) {
                              const number = parseFloat(value.replace('√(', '').replace(')', ''));
                              display.value = squareRoot(number);

                    } else if (value.includes('ln')) {
                              const number = parseFloat(value.replace('ln(', '').replace(')', ''));
                              display.value = neperianLogarithm(number);
                              
                    } else if (value.includes('!')) {
                              const number = parseFloat(value.replace('!', ''));
                              display.value = factorial(number);

                    } else if (value.includes('^')) {
                              const values = value.split('^');
                              const a = parseFloat(values[0]);
                              const b = parseFloat(values[1]);
                              display.value = power(a, b);

                    } else {
                              const operators = ['+', '-', '*', '/', '%'];
                              let result = { a: 0, b: 0, operator: '' };

                              for (let i = 0; i < operators.length; i++) {
                                        const operator = operators[i];
                                        if (value.includes(operator)) {
                                                  const values = value.split(operator);
                                                  result.a = parseFloat(values[0]);
                                                  result.b = parseFloat(values[1]);
                                                  result.operator = operator;
                                                  break;
                                        }
                              }

                              switch (result.operator) {
                                        case '+':
                                                  display.value = add(result.a, result.b);
                                                  break;
                                        case '-':
                                                  display.value = subtract(result.a, result.b);
                                                  break;
                                        case '*':
                                                  display.value = product(result.a, result.b);
                                                  break;
                                        case '/':
                                                  display.value = division(result.a, result.b);
                                                  break;
                                        case '%':
                                                  display.value = percentage(result.a, result.b);
                                                  break;
                                        default:
                                                  display.value = 'Error';
                              }
                    }
          } catch (e) {
                    display.value = 'Error';
          }
} 