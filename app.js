const topics = {
  binary: {
    name: "Binary Number System", base: "Base 2", tagline: "The language of computers",
    intro: "The binary number system uses only two digits: 0 and 1. Each digit is called a bit. Computers use binary because digital circuits can represent two states, such as OFF and ON.",
    video: "Binary lesson video", videoFile: "assets/videos/binary-video.mp4", quizUrl: "https://view.genially.com/6ab605b8f770db06549f09bb",
    sections: [
      ["What is binary?", "Binary is a base-2 number system. It uses the digits 0 and 1 to represent values."],
      ["Place values", "From right to left, the place values are powers of 2: 1, 2, 4, 8, 16, 32, and so on."],
      ["Example: 1011₂", "1011₂ = (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1) = 11₁₀."]
    ],
    questions: [
      {q:"Which two digits are used in the binary number system?", o:["0 and 1","0 and 2","1 and 2","0 and 9"], a:0, e:"Binary is base 2, so it uses only 0 and 1."},
      {q:"What is the decimal value of 101₂?", o:["3","4","5","6"], a:2, e:"101₂ = 4 + 0 + 1 = 5₁₀."},
      {q:"What is the place value of the third digit from the right in binary?", o:["2","4","8","16"], a:1, e:"The third position from the right is 2², which equals 4."},
      {q:"Convert 1001₂ to decimal.", o:["7", "8", "9", "10"], a:2, e:"1001₂ = 8 + 0 + 0 + 1 = 9₁₀."},
      {q:"Which binary place value is directly to the left of 2²?", o:["2¹", "2³", "2⁴", "2⁰"], a:1, e:"Moving left increases the exponent by one, so the next place is 2³ = 8."},
      {q:"Convert 6₁₀ to binary.", o:["101₂", "110₂", "111₂", "100₂"], a:1, e:"6 = 4 + 2, so the binary digits are 110₂."},
      {q:"How many bits are in one byte?", o:["4", "8", "10", "16"], a:1, e:"One byte contains 8 bits."},
      {q:"Which binary number represents decimal 12?", o:["1010₂", "1100₂", "1110₂", "1001₂"], a:1, e:"1100₂ = 8 + 4 + 0 + 0 = 12₁₀."},
      {q:"What is the decimal value of 111₂?", o:["5", "6", "7", "8"], a:2, e:"111₂ = 4 + 2 + 1 = 7₁₀."},
      {q:"Which number is NOT a valid binary number?", o:["10101₂", "1100₂", "1021₂", "111₂"], a:2, e:"Binary only allows 0 and 1, so 2 is not a valid digit."}
    ]
  },
  decimal: {
    name: "Decimal Number System", base: "Base 10", tagline: "The number system we use every day",
    intro: "The decimal number system uses ten digits, from 0 to 9. It is a positional number system, meaning a digit's value depends on its position.",
    video: "Decimal lesson video", videoFile: "assets/videos/decimal-video.mp4", quizUrl: "https://view.genially.com/6ab93d3352b316d44ffc4d63",
    sections: [
      ["What is decimal?", "Decimal is a base-10 number system that uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9."],
      ["Place values", "From right to left, the place values are ones, tens, hundreds, thousands, and so on."],
      ["Example: 352", "352 = (3 × 100) + (5 × 10) + (2 × 1) = 300 + 50 + 2."]
    ],
    questions: [
      {q:"How many digits are used in the decimal number system?", o:["2","8","10","16"], a:2, e:"Decimal is base 10 and uses ten digits, 0 through 9."},
      {q:"What is the value of digit 7 in 472?", o:["7","70","700","7000"], a:1, e:"In 472, 7 is in the tens position, so its value is 70."},
      {q:"Which digit is not used in the decimal system?", o:["0","5","9","A"], a:3, e:"Decimal uses only the digits 0 through 9; A is used in hexadecimal."},
      {q:"What is the place value of 6 in 6,482?", o:["6", "60", "600", "6,000"], a:3, e:"6 is in the thousands place, so its value is 6,000."},
      {q:"Write 5,306 in expanded form.", o:["5,000 + 300 + 6", "500 + 30 + 6", "5,000 + 30 + 6", "5,000 + 300 + 60"], a:0, e:"5,306 = 5,000 + 300 + 0 + 6."},
      {q:"What is the value of the digit 4 in 2,745?", o:["4", "40", "400", "4,000"], a:1, e:"4 is in the tens position, so its value is 40."},
      {q:"Which number is the greatest?", o:["0.8", "0.08", "0.808", "0.88"], a:3, e:"0.88 is greater than 0.808, 0.8 and 0.08."},
      {q:"How many ones are equal to one hundred?", o:["10", "50", "100", "1,000"], a:2, e:"One hundred contains 100 ones."},
      {q:"What is 3 × 1,000 + 2 × 100 + 4 × 10 + 5?", o:["3,245", "3,425", "3,254", "3,524"], a:0, e:"The contributions are 3,000 + 200 + 40 + 5 = 3,245."},
      {q:"Which digit is in the hundreds place in 8,631?", o:["8", "6", "3", "1"], a:1, e:"In 8,631, 6 is in the hundreds place."}
    ]
  },
  octal: {
    name: "Octal Number System", base: "Base 8", tagline: "A compact way to represent binary values",
    intro: "The octal number system uses eight digits: 0 to 7. Each position represents a power of 8. Octal can provide a shorter way to write groups of binary digits.",
    video: "Octal lesson video", driveId: "1eubI9XIe23Zeht8UJFUeo-0LVnP5QWf4", quizUrl: "https://view.genially.com/6ab949bc537d84c24c14e592",
    sections: [
      ["What is octal?", "Octal is a base-8 number system. Its allowed digits are 0, 1, 2, 3, 4, 5, 6 and 7."],
      ["Place values", "From right to left, octal place values are 1, 8, 64, 512, and so on."],
      ["Example: 25₈", "25₈ = (2 × 8) + (5 × 1) = 16 + 5 = 21₁₀."]
    ],
    questions: [
      {q:"Which is the largest single digit in the octal system?", o:["7","8","9","F"], a:0, e:"Octal uses digits 0 to 7, making 7 its largest digit."},
      {q:"What is the decimal value of 10₈?", o:["2","8","10","16"], a:1, e:"10₈ = (1 × 8) + 0 = 8₁₀."},
      {q:"What is the base of the octal number system?", o:["2","8","10","16"], a:1, e:"Octal is base 8."},
      {q:"Which number is NOT a valid octal number?", o:["127₈", "705₈", "286₈", "34₈"], a:2, e:"Octal uses digits 0 to 7, so 8 and 9 are not allowed."},
      {q:"Convert 17₈ to decimal.", o:["13", "14", "15", "16"], a:2, e:"17₈ = (1 × 8) + 7 = 15₁₀."},
      {q:"What is the place value of the second digit from the right in octal?", o:["1", "8", "16", "64"], a:1, e:"The second position from the right is 8¹ = 8."},
      {q:"Convert 45₁₀ to octal.", o:["55₈", "56₈", "65₈", "54₈"], a:0, e:"45 ÷ 8 = 5 remainder 5; 5 ÷ 8 = 0 remainder 5. Therefore 55₈."},
      {q:"What is the decimal value of 23₈?", o:["17", "18", "19", "20"], a:2, e:"23₈ = (2 × 8) + 3 = 19₁₀."},
      {q:"How many binary bits correspond to one octal digit?", o:["2", "3", "4", "8"], a:1, e:"Since 8 = 2³, one octal digit corresponds to three binary bits."},
      {q:"Convert 111₂ to octal.", o:["5₈", "6₈", "7₈", "8₈"], a:2, e:"111₂ equals 7₁₀, which is 7₈."}
    ]
  },
  hexadecimal: {
    name: "Hexadecimal Number System", base: "Base 16", tagline: "Sixteen symbols for representing values",
    intro: "The hexadecimal number system uses sixteen symbols: 0 to 9 and A to F. The letters represent values from 10 to 15.",
    video: "Hexadecimal lesson video", driveId: "1FtXm6uWuPcJrN_BSq9CxQdXxAjcoSjTd", quizUrl: "https://view.genially.com/6ad5fdeec5f9fd24c6f13226",
    sections: [
      ["What is hexadecimal?", "Hexadecimal is a base-16 number system. It uses 0–9 and A, B, C, D, E and F."],
      ["Letter values", "A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15."],
      ["Example: 1A₁₆", "1A₁₆ = (1 × 16) + 10 = 26₁₀."]
    ],
    questions: [
      {q:"What is the base of the hexadecimal system?", o:["8","10","12","16"], a:3, e:"Hexadecimal is base 16."},
      {q:"What value does A represent in hexadecimal?", o:["9","10","11","12"], a:1, e:"In hexadecimal, A represents decimal 10."},
      {q:"Which symbol represents decimal 15 in hexadecimal?", o:["D","E","F","G"], a:2, e:"F represents decimal 15; G is not a hexadecimal digit."},
      {q:"Which of these is NOT a valid hexadecimal digit?", o:["B", "E", "G", "9"], a:2, e:"Hexadecimal uses 0–9 and A–F. G is not included."},
      {q:"What decimal value does C represent?", o:["10", "11", "12", "13"], a:2, e:"C represents decimal 12 in hexadecimal."},
      {q:"Convert 2F₁₆ to decimal.", o:["45", "46", "47", "48"], a:2, e:"2F₁₆ = (2 × 16) + 15 = 47₁₀."},
      {q:"What is the place value of the second position from the right in hexadecimal?", o:["1", "8", "16", "256"], a:2, e:"The second position is 16¹ = 16."},
      {q:"Convert 31₁₀ to hexadecimal.", o:["1D₁₆", "1E₁₆", "1F₁₆", "2A₁₆"], a:2, e:"31 ÷ 16 = 1 remainder 15; 15 is F, so the answer is 1F₁₆."},
      {q:"How many binary bits correspond to one hexadecimal digit?", o:["2", "3", "4", "8"], a:2, e:"Since 16 = 2⁴, one hexadecimal digit represents four bits."},
      {q:"What is the decimal value of 10₁₆?", o:["10", "12", "16", "20"], a:2, e:"10₁₆ = (1 × 16) + 0 = 16₁₀."}
    ]
  }
};


const learningNotes = {
  binary: {
    sections: [
      ["1. Meaning of the binary number system", `<p>The <strong>binary number system</strong> is a number system with base 2. It uses only two digits: <strong>0 and 1</strong>. Each binary digit is called a <em>bit</em> (short for binary digit). A group of eight bits is called a <strong>byte</strong>.</p><p>Computers use binary because electronic circuits can represent two clear states, such as OFF and ON, low and high voltage, or false and true. These states can be represented using 0 and 1.</p>`],
      ["2. Binary place values", `<p>Binary is a <strong>positional number system</strong>. A digit's value depends on its position. Since binary is base 2, each place is a power of 2. Start at the right: 2⁰ = 1. Move left and multiply by 2 each time.</p><div class="place-value-table"><table><tr><th>Place</th><td>4th from right</td><td>3rd from right</td><td>2nd from right</td><td>1st from right</td></tr><tr><th>Power</th><td>2³</td><td>2²</td><td>2¹</td><td>2⁰</td></tr><tr><th>Place value</th><td>8</td><td>4</td><td>2</td><td>1</td></tr><tr><th>Example digit</th><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><th>Digit × value</th><td>1 × 8</td><td>0 × 4</td><td>1 × 2</td><td>1 × 1</td></tr><tr><th>Contribution</th><td>8</td><td>0</td><td>2</td><td>1</td></tr></table></div><p><strong>Understand the example:</strong> The digits make 1011₂. Multiply each digit by its place value, then add: 8 + 0 + 2 + 1 = 11₁₀. A zero contributes nothing, but its place is still important.</p>`],
      ["3. Converting binary to decimal", `<p>To convert a binary number into decimal, multiply each digit by its place value and add the results.</p><div class="worked-example"><strong>Example: Convert 1011₂ to decimal.</strong><p>Place values: &nbsp; 8 &nbsp; 4 &nbsp; 2 &nbsp; 1</p><p>Digits: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp; 0 &nbsp; 1 &nbsp; 1</p><p>= (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)</p><p>= 8 + 0 + 2 + 1</p><strong>= 11₁₀</strong></div>`],
      ["4. Converting decimal to binary", `<p>To convert a whole decimal number to binary, repeatedly divide the number by 2. Record each remainder. Continue until the quotient becomes 0, then read the remainders from bottom to top.</p><div class="worked-example"><strong>Example: Convert 13₁₀ to binary.</strong><p>13 ÷ 2 = 6 remainder 1</p><p>6 ÷ 2 = 3 remainder 0</p><p>3 ÷ 2 = 1 remainder 1</p><p>1 ÷ 2 = 0 remainder 1</p><strong>Read upwards: 1101₂</strong></div>`],
      ["5. Uses of binary", `<ul><li>Storing and processing information inside computers.</li><li>Representing text, images, sound and videos in digital form.</li><li>Controlling digital devices and electronic circuits.</li><li>Representing computer instructions and data.</li></ul>`]
    ],
    practice: [
      ["Which digits are allowed in binary numbers?", "Only 0 and 1."],
      ["What is the place value of the fourth position from the right in binary?", "2³ = 8."],
      ["Convert 1101₂ into decimal.", "8 + 4 + 0 + 1 = 13₁₀."],
      ["Convert 9₁₀ into binary.", "9 ÷ 2 remainders are 1, 0, 0, 1. Read upwards: 1001₂."],
      ["Why do computers use binary?", "Electronic circuits can represent two states, commonly represented by 0 and 1."]
    ]
  },
  decimal: {
    sections: [
      ["1. Meaning of the decimal number system", `<p>The <strong>decimal number system</strong> is the number system used in everyday counting, measuring and calculations. It has base 10 and uses ten digits: <strong>0, 1, 2, 3, 4, 5, 6, 7, 8 and 9</strong>.</p><p>When we count beyond 9, we combine digits to make numbers such as 10, 25, 100 and 1,000. Decimal is also called the denary number system.</p>`],
      ["2. Decimal place values", `<p>Decimal is a <strong>positional number system</strong> with base 10. Each place is ten times greater than the place to its right. From right to left, the places are ones, tens, hundreds, thousands, and so on.</p><div class="place-value-table"><table><tr><th>Place</th><td>Thousands</td><td>Hundreds</td><td>Tens</td><td>Ones</td></tr><tr><th>Power</th><td>10³</td><td>10²</td><td>10¹</td><td>10⁰</td></tr><tr><th>Place value</th><td>1,000</td><td>100</td><td>10</td><td>1</td></tr><tr><th>Example digit</th><td>4</td><td>5</td><td>8</td><td>2</td></tr><tr><th>Digit × value</th><td>4 × 1,000</td><td>5 × 100</td><td>8 × 10</td><td>2 × 1</td></tr><tr><th>Contribution</th><td>4,000</td><td>500</td><td>80</td><td>2</td></tr></table></div><p><strong>Understand the example:</strong> In 4,582, 4 means four thousands, 5 means five hundreds, 8 means eight tens and 2 means two ones. Add 4,000 + 500 + 80 + 2 to get 4,582. Face value is the digit itself; place value is the digit multiplied by its position value.</p>`],
      ["3. Expanded form of a decimal number", `<p>Expanded form shows the contribution of every digit according to its place value.</p><div class="worked-example"><strong>Example: Expand 4,582.</strong><p>4 is in the thousands place = 4 × 1,000 = 4,000</p><p>5 is in the hundreds place = 5 × 100 = 500</p><p>8 is in the tens place = 8 × 10 = 80</p><p>2 is in the ones place = 2 × 1 = 2</p><strong>4,582 = 4,000 + 500 + 80 + 2</strong></div>`],
      ["4. Converting decimal to other number systems", `<p>Decimal numbers can be converted into binary, octal or hexadecimal. For whole numbers, divide repeatedly by the target base and record the remainders. Read the remainders from bottom to top.</p><p>For example, to convert 18₁₀ to octal, divide by 8: 18 ÷ 8 = 2 remainder 2; then 2 ÷ 8 = 0 remainder 2. Therefore, 18₁₀ = 22₈.</p>`],
      ["5. Uses of decimal", `<ul><li>Everyday counting and arithmetic.</li><li>Money, prices, distance, mass and time measurements.</li><li>School mathematics and scientific calculations.</li><li>Communicating quantities in daily life.</li></ul>`]
    ],
    practice: [
      ["How many digits are used in the decimal system?", "Ten digits: 0 to 9."],
      ["What is the value of 6 in 3,642?", "600, because 6 is in the hundreds place."],
      ["Write 7,305 in expanded form.", "7,000 + 300 + 0 + 5."],
      ["Convert 25₁₀ to binary.", "25 ÷ 2 remainders read upwards give 11001₂."],
      ["What is another name for the decimal number system?", "The denary number system."]
    ]
  },
  octal: {
    sections: [
      ["1. Meaning of the octal number system", `<p>The <strong>octal number system</strong> is a positional number system with base 8. It uses eight digits only: <strong>0, 1, 2, 3, 4, 5, 6 and 7</strong>. The digits 8 and 9 are not allowed in an octal number.</p><p>Octal is useful because it provides a shorter way to write binary values. Every octal digit corresponds to a group of three binary bits.</p>`],
      ["2. Octal place values", `<p>Octal is a <strong>positional number system</strong> with base 8. Each place is eight times the place to its right. Starting at the right, the place values are 8⁰ = 1, 8¹ = 8, 8² = 64 and 8³ = 512.</p><div class="place-value-table"><table><tr><th>Place</th><td>4th from right</td><td>3rd from right</td><td>2nd from right</td><td>1st from right</td></tr><tr><th>Power</th><td>8³</td><td>8²</td><td>8¹</td><td>8⁰</td></tr><tr><th>Place value</th><td>512</td><td>64</td><td>8</td><td>1</td></tr><tr><th>Example digit</th><td>0</td><td>1</td><td>5</td><td>7</td></tr><tr><th>Digit × value</th><td>0 × 512</td><td>1 × 64</td><td>5 × 8</td><td>7 × 1</td></tr><tr><th>Contribution</th><td>0</td><td>64</td><td>40</td><td>7</td></tr></table></div><p><strong>Understand the example:</strong> The number 0157₈ is usually written 157₈. Its decimal value is 0 + 64 + 40 + 7 = 111₁₀. The zero at the left does not change the value. Octal digits can only be 0 through 7.</p>`],
      ["3. Converting octal to decimal", `<p>Multiply each octal digit by its place value and add the products.</p><div class="worked-example"><strong>Example: Convert 157₈ to decimal.</strong><p>= (1 × 64) + (5 × 8) + (7 × 1)</p><p>= 64 + 40 + 7</p><strong>= 111₁₀</strong></div>`],
      ["4. Converting decimal to octal", `<p>Divide the decimal number repeatedly by 8. Write down each remainder and read the remainders from bottom to top.</p><div class="worked-example"><strong>Example: Convert 83₁₀ to octal.</strong><p>83 ÷ 8 = 10 remainder 3</p><p>10 ÷ 8 = 1 remainder 2</p><p>1 ÷ 8 = 0 remainder 1</p><strong>Read upwards: 123₈</strong></div>`],
      ["5. Relationship between binary and octal", `<p>Since 8 = 2³, one octal digit represents exactly three binary bits. To convert binary to octal, group the binary digits into sets of three from the right. Add leading zeros to the left if needed.</p><div class="worked-example"><strong>Example: Convert 110101₂ to octal.</strong><p>Group: 110 &nbsp; 101</p><p>110₂ = 6 and 101₂ = 5</p><strong>Therefore, 110101₂ = 65₈</strong></div>`],
      ["6. Uses of octal", `<ul><li>Compact representation of binary data.</li><li>Some computer systems and digital applications.</li><li>Unix and Linux file permissions, which are commonly written using octal digits.</li></ul>`]
    ],
    practice: [
      ["Which digits are allowed in octal?", "Digits 0 to 7."],
      ["What is the place value of the third position from the right in octal?", "8² = 64."],
      ["Convert 34₈ to decimal.", "(3 × 8) + 4 = 28₁₀."],
      ["Convert 20₁₀ to octal.", "20 ÷ 8 = 2 remainder 4; 2 ÷ 8 = 0 remainder 2. Answer: 24₈."],
      ["Convert 111 000₂ to octal.", "111₂ = 7 and 000₂ = 0. Answer: 70₈."]
    ]
  },
  hexadecimal: {
    sections: [
      ["1. Meaning of the hexadecimal number system", `<p>The <strong>hexadecimal number system</strong> is a positional number system with base 16. It uses sixteen symbols: the digits <strong>0 to 9</strong> and the letters <strong>A, B, C, D, E and F</strong>.</p><p>The letters represent values that are needed after 9: A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15. Therefore, G is not a valid hexadecimal digit.</p>`],
      ["2. Hexadecimal place values", `<p>Hexadecimal is a <strong>positional number system</strong> with base 16. Each place is sixteen times the place to its right. Starting at the right, the place values are 16⁰ = 1, 16¹ = 16, 16² = 256 and 16³ = 4,096.</p><p>Hexadecimal uses 0–9 and A–F. The letters represent values after 9: A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15.</p><div class="place-value-table"><table><tr><th>Place</th><td>3rd from right</td><td>2nd from right</td><td>1st from right</td></tr><tr><th>Power</th><td>16²</td><td>16¹</td><td>16⁰</td></tr><tr><th>Place value</th><td>256</td><td>16</td><td>1</td></tr><tr><th>Example digit</th><td>0</td><td>2</td><td>A (10)</td></tr><tr><th>Digit × value</th><td>0 × 256</td><td>2 × 16</td><td>10 × 1</td></tr><tr><th>Contribution</th><td>0</td><td>32</td><td>10</td></tr></table></div><p><strong>Understand the example:</strong> 02A₁₆ is usually written 2A₁₆. Since A means ten, calculate (2 × 16) + (10 × 1) = 32 + 10 = 42₁₀. A is a digit with a numerical value, not just a letter.</p>`],
      ["3. Converting hexadecimal to decimal", `<p>Replace any letters with their decimal values, multiply each digit by its place value and add the results.</p><div class="worked-example"><strong>Example: Convert 2A₁₆ to decimal.</strong><p>A = 10</p><p>= (2 × 16) + (10 × 1)</p><p>= 32 + 10</p><strong>= 42₁₀</strong></div>`],
      ["4. Converting decimal to hexadecimal", `<p>Divide the decimal number repeatedly by 16. Remainders from 10 to 15 must be written as A to F. Read the remainders from bottom to top.</p><div class="worked-example"><strong>Example: Convert 175₁₀ to hexadecimal.</strong><p>175 ÷ 16 = 10 remainder 15 (F)</p><p>10 ÷ 16 = 0 remainder 10 (A)</p><strong>Read upwards: AF₁₆</strong></div>`],
      ["5. Relationship between binary and hexadecimal", `<p>Since 16 = 2⁴, one hexadecimal digit represents four binary bits. To convert binary to hexadecimal, group the bits into sets of four from the right. Add leading zeros to the left when necessary.</p><div class="worked-example"><strong>Example: Convert 1101 1010₂ to hexadecimal.</strong><p>1101₂ = 13 = D</p><p>1010₂ = 10 = A</p><strong>Therefore, 11011010₂ = DA₁₆</strong></div>`],
      ["6. Uses of hexadecimal", `<ul><li>HTML and CSS colour codes, such as #FF0000 for red.</li><li>Representing memory addresses and machine-level data.</li><li>Debugging and programming tools.</li><li>Compactly representing binary values.</li></ul>`]
    ],
    practice: [
      ["What are the six letters used in hexadecimal?", "A, B, C, D, E and F."],
      ["What decimal value does E represent?", "14."],
      ["Convert 3F₁₆ to decimal.", "(3 × 16) + 15 = 63₁₀."],
      ["Convert 64₁₀ to hexadecimal.", "64 ÷ 16 = 4 remainder 0; 4 ÷ 16 = 0 remainder 4. Answer: 40₁₆."],
      ["Convert 1010 1111₂ to hexadecimal.", "1010₂ = A and 1111₂ = F. Answer: AF₁₆."]
    ]
  }
};

const app = document.getElementById("app");
const nav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");

function normaliseRoute(route) {
  const clean = String(route || "home").replace(/^#/, "").trim().toLowerCase();
  const allowed = ["home", "about", "videos", "learning-materials", "quizzes", "history"];
  for (const topic of Object.keys(topics)) {
    allowed.push(`videos-${topic}`, `learning-materials-${topic}`, `quizzes-${topic}`);
  }
  return allowed.includes(clean) ? clean : "home";
}

let currentRoute = normaliseRoute(window.location.hash.slice(1) || "home");

function navigate(route) {
  const nextRoute = normaliseRoute(route);
  currentRoute = nextRoute;

  // pushState changes the URL without triggering a second render.
  const nextUrl = `${window.location.pathname}${window.location.search}#${nextRoute}`;
  window.history.pushState({ route: nextRoute }, "", nextUrl);

  render(nextRoute);
  window.scrollTo({ top: 0, behavior: "auto" });
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("popstate", () => {
  currentRoute = normaliseRoute(window.location.hash.slice(1) || "home");
  render(currentRoute);
  window.scrollTo({ top: 0, behavior: "auto" });
});

window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 450);
});

const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
  backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// One delegated handler works for all buttons rendered on every page.
document.addEventListener("click", (event) => {
  const option = event.target instanceof Element ? event.target.closest("[data-challenge-answer]") : null;
  if (!option) return;
  const feedback = document.getElementById("challengeFeedback");
  if (!feedback) return;
  document.querySelectorAll(".challenge-option").forEach(button => button.classList.remove("is-correct", "is-wrong"));
  const correct = option.getAttribute("data-challenge-answer") === "10";
  option.classList.add(correct ? "is-correct" : "is-wrong");
  feedback.textContent = correct
    ? "Correct! 1010₂ = 8 + 0 + 2 + 0 = 10₁₀. Brilliant work!"
    : "Not quite. Try adding the place values: 8 + 0 + 2 + 0.";
  feedback.classList.toggle("is-correct-text", correct);
});

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("[data-route]") : null;
  if (!target) return;
  event.preventDefault();
  navigate(target.getAttribute("data-route"));
});

function homePage() {
  return `
    <section class="hero hero-redesign" aria-label="Bhutan-inspired digital learning banner">
      <div class="hero-content hero-redesign-content">
        <span class="eyebrow">CLASS IX · DIGITAL TECHNOLOGY & INNOVATION</span>
        <h1 class="hero-title">Unlock the World of<br><span class="word-rotator" aria-label="Numbers, discovery, possibilities"><span>Numbers</span><span>Discovery</span><span>Possibilities</span><span>Numbers</span></span></h1>
        <p>Discover how computers understand, store and process information. Learn the four number systems through videos, clear notes and fun challenges.</p>
        <div class="hero-actions">
          <button class="btn btn-gold" data-route="learning-materials">Start Learning <span aria-hidden="true">→</span></button>
          <button class="btn btn-outline" data-route="quizzes">Try a Quiz <span aria-hidden="true">✦</span></button>
        </div>
        <div class="hero-points"><span>▣ Learn concepts</span><span>⇄ Convert numbers</span><span>★ Practise & improve</span></div>
      </div>
      <div class="hero-binary-art" aria-hidden="true"><span>0101</span><span>1010</span><span>1101</span><b>01</b></div>
      <div class="hero-orbit" aria-hidden="true"><i>0</i><i>1</i><i>01</i><i>10</i></div>
      <div class="hero-floating-code" aria-hidden="true"><span>101101</span><span>010010</span><span>110011</span></div>
      <div class="hero-scroll-cue" aria-hidden="true"><span></span> SCROLL TO EXPLORE</div>
    </section>

    <section class="section welcome-redesign">
      <div class="welcome-copy">
        <span class="eyebrow" style="color:#a87916">KUZUZANGPO LA!</span>
        <h2>Your learning adventure starts here.</h2>
        <p>Number systems are the language behind digital technology. Explore at your own pace, build confidence with worked examples and test what you know through practice.</p>
        <div class="welcome-mini-stats"><span><strong>4</strong> number systems</span><span><strong>3</strong> ways to learn</span><span><strong>1</strong> learning journey</span></div>
      </div>
      <div class="welcome-video-card welcome-video-redesign">
        <span class="eyebrow" style="color:#a87916">A MESSAGE TO LEARNERS</span>
        <h2>Welcome to Digital Number Systems</h2>
        <p>Watch the introduction before you begin.</p>
        <video class="video-player" controls preload="metadata" playsinline>
          <source src="assets/videos/welcome-video.mp4" type="video/mp4">
          Your browser does not support this video.
        </video>
      </div>
    </section>

    <section class="section learning-path-section">
      <div class="section-heading"><span class="eyebrow" style="color:#a87916">CHOOSE YOUR ADVENTURE</span><h2>Explore the four number systems</h2><p>Each topic includes explanations, worked examples, a video lesson and a quiz.</p></div>
      ${topicCards()}
    </section>

    <section class="section home-tools-section">
      <div class="section-heading"><span class="eyebrow" style="color:#a87916">LEARN BY DOING</span><h2>Your learning toolkit</h2><p>Watch, read and practise your way to becoming a number-system expert.</p></div>
      <div class="home-tools-grid">
        <button class="home-tool-card" data-route="videos"><span class="home-tool-icon">▶</span><strong>Video lessons</strong><small>See concepts explained step by step</small><span class="tool-link">Explore videos →</span></button>
        <button class="home-tool-card" data-route="learning-materials"><span class="home-tool-icon">▤</span><strong>Learning materials</strong><small>Review notes, place values and examples</small><span class="tool-link">Read notes →</span></button>
        <button class="home-tool-card" data-route="quizzes"><span class="home-tool-icon">✦</span><strong>Quiz challenges</strong><small>Check your understanding and improve</small><span class="tool-link">Take a quiz →</span></button>
      </div>
    </section>

    <section class="section daily-challenge-section">
      <div class="daily-challenge">
        <div><span class="eyebrow">QUICK THINKING CHALLENGE</span><h2>Can you crack this number?</h2><p>What is the decimal value of <strong>1010₂</strong>?</p></div>
        <div class="challenge-options">
          <button type="button" class="challenge-option" data-challenge-answer="8">8</button>
          <button type="button" class="challenge-option" data-challenge-answer="10">10</button>
          <button type="button" class="challenge-option" data-challenge-answer="12">12</button>
          <button type="button" class="challenge-option" data-challenge-answer="14">14</button>
          <p id="challengeFeedback" class="challenge-feedback" aria-live="polite">Choose an answer to check yourself.</p>
        </div>
      </div>
    </section>`;
}
function topicCards() {
  return `<div class="topic-grid">${Object.entries(topics).map(([key,t],i)=>`
    <article class="topic-card topic-home-card topic-card-${key}">
      <div class="topic-card-top"><span class="topic-number">TOPIC 0${i+1}</span><span class="topic-base">${t.base}</span></div>
      <div class="topic-card-symbol" aria-hidden="true">${({binary:"01",decimal:"123",octal:"₈",hexadecimal:"A–F"})[key]}</div>
      <div><h3>${t.name}</h3><p class="topic-tagline">${t.tagline}</p><p class="topic-description">${t.intro}</p></div>
      <div class="topic-card-actions">
        <button class="btn btn-dark" data-route="videos-${key}">▶ Watch</button>
        <button class="btn btn-outline-dark" data-route="learning-materials-${key}">▤ Read</button>
        <button class="btn btn-outline-dark" data-route="quizzes-${key}">✦ Quiz</button>
      </div>
    </article>`).join("")}</div>`;
}
function explorePage() {
  return `<section class="page-banner"><span class="eyebrow">Choose your learning path</span><h1>Explore Number Systems</h1><p>Four number systems, each with a video lesson, reading material and interactive quiz.</p></section>
    <div class="section"><div class="section-heading"><h2>Select a topic</h2><p>Start with any topic. You can return to this page whenever you are ready to explore another.</p></div>${topicCards()}</div>`;
}
function topicPage(key) {
  const t = topics[key];
  return `<section class="page-banner"><span class="eyebrow">${t.base}</span><h1>${t.name}</h1><p>${t.tagline}. Choose an activity below to continue learning.</p></section>
    <div class="breadcrumb"><button data-route="home">Home</button> / <button data-route="explore">Explore</button> / ${t.name}</div>
    <section class="section">
      <div class="info-panel"><h2>About this topic</h2><p>${t.intro}</p></div>
      <div class="learning-actions">
        <div class="action-card"><div class="icon">▶</div><h3>Video Lesson</h3><p>Watch the explanation and worked examples.</p><button class="btn btn-dark" data-route="${key}-video">Watch Video</button></div>
        <div class="action-card"><div class="icon">▤</div><h3>Reading Material</h3><p>Read the key concepts, place values and examples.</p><button class="btn btn-dark" data-route="${key}-reading">Read Notes</button></div>
        <div class="action-card"><div class="icon">✎</div><h3>Interactive Quiz</h3><p>Check what you have learned and see your score.</p><button class="btn btn-dark" data-route="${key}-quiz">Start Quiz</button></div>
      </div>
      <div class="back-row"><button class="btn btn-outline-dark btn-dark" data-route="explore">← Back to all topics</button></div>
    </section>`;
}
function activityPage(key, type, sectionTitle = "") {
  const t = topics[key];
  const title = sectionTitle || (type === "video" ? "Video Lesson" : type === "reading" ? "Learning Materials" : "Interactive Quiz");
  let body = "";
  if (type === "video") {
    if (t.videoFile) {
      body = `<video class="video-player" controls preload="metadata" playsinline aria-label="${t.name} lesson video"><source src="${t.videoFile}" type="video/mp4">Your browser does not support this video. Please use a recent version of Chrome or Safari.</video>`;
    } else {
      const embed = `https://drive.google.com/file/d/${t.driveId}/preview`;
      body = `<iframe class="video-frame" src="${embed}" title="${t.name} video lesson" allow="autoplay; fullscreen" allowfullscreen></iframe><p class="empty-note">Use the player controls to play, pause, replay and seek through the lesson. Google Drive access must be set to “Anyone with the link”.</p>`;
    }
  } else if (type === "reading") {
    const notes = learningNotes[key];
    body = `<div class="reading-sheet"><div class="reading-ribbon">BHUTAN • DIGITAL LEARNING · EXPANDED NOTES</div><p class="reading-lead">${t.intro}</p><div class="reading-facts"><div><small>NUMBER SYSTEM</small><strong>${t.name}</strong></div><div><small>BASE</small><strong>${t.base.replace("Base ","")}</strong></div></div>
      <div class="notes-intro"><h3>Learning objectives</h3><p>After studying this material, you should be able to explain the number system, identify its valid digits, describe place values, and solve basic conversion problems.</p></div>
      ${notes.sections.map(([h,html],i)=>`<article class="detailed-note-section"><span class="reading-index">${String(i+1).padStart(2,"0")}</span><div><h3>${h}</h3>${html}</div></article>`).join("")}
      <div class="example-box"><strong>Remember:</strong> The base tells you how many different digits or symbols are used in a number system. Always check that every digit in a number is valid for its base.</div>
      <section class="converter-lab" id="conversion-lab">
        <div class="converter-heading"><span class="eyebrow">TRY IT YOURSELF</span><h2>Number System Conversion Calculator</h2><p>Use this calculator to convert any valid number instantly. Select the original base, select the base you want, enter your number and press Convert Now.</p></div>
        <div class="converter-panel">
          <div class="converter-controls">
            <label>Convert from<select id="convertFrom"><option value="10">Decimal (Base 10)</option><option value="2">Binary (Base 2)</option><option value="8">Octal (Base 8)</option><option value="16">Hexadecimal (Base 16)</option></select></label>
            <button type="button" class="converter-swap" id="swapBases" aria-label="Swap number systems" title="Swap number systems">⇄</button>
            <label>Convert to<select id="convertTo"><option value="2">Binary (Base 2)</option><option value="10">Decimal (Base 10)</option><option value="8">Octal (Base 8)</option><option value="16">Hexadecimal (Base 16)</option></select></label>
          </div>
          <form id="converterForm" class="converter-form">
            <label for="convertInput">Enter your number</label>
            <div class="converter-input-row"><input id="convertInput" type="text" autocomplete="off" spellcheck="false" placeholder="Example: 1011" required><button class="btn btn-gold" type="submit">Convert Now <span aria-hidden="true">→</span></button></div>
            <p class="converter-hint" id="converterHint">Use only digits 0 and 1 for binary numbers.</p>
          </form>
          <div class="converter-result" id="converterResult" aria-live="polite"><div class="converter-result-placeholder"><span>⇄</span><strong>Your answer will appear here</strong><small>Try converting 1011 from binary to decimal.</small></div></div>
          <div class="converter-examples"><span>QUICK EXAMPLES</span><button type="button" data-convert-example="1011" data-from="2" data-to="10">1011₂ → 11₁₀</button><button type="button" data-convert-example="25" data-from="8" data-to="10">25₈ → 21₁₀</button><button type="button" data-convert-example="2F" data-from="16" data-to="10">2F₁₆ → 47₁₀</button></div>
        </div>
      </section>

      <section class="practice-section"><span class="eyebrow">CHECK YOUR UNDERSTANDING</span><h2>Practice Questions</h2><p>Try answering each question in your notebook before opening the answer.</p>
      ${notes.practice.map(([q,a],i)=>`<details class="practice-item"><summary><span>Question ${i+1}</span>${q}</summary><div class="practice-answer"><strong>Suggested answer:</strong> ${a}</div></details>`).join("")}
      </section>


      <section class="conversion-practice" id="conversion-practice">
        <div class="conversion-practice-title"><span class="eyebrow">APPLY WHAT YOU LEARNED</span><h2>Conversion Practice</h2><p>Now solve these conversion questions yourself. Type each answer and click <strong>Check Answer</strong> to receive instant feedback.</p></div>
        <div class="conversion-practice-list">
          ${({
            binary:[["Convert 1101₂ to decimal.","13","1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13."],["Convert 18₁₀ to binary.","10010","18 ÷ 2 gives remainders 0, 1, 0, 0, 1. Read upwards: 10010₂."],["Convert 25₈ to binary.","10101","Convert each octal digit to 3 binary bits: 2 = 010 and 5 = 101, giving 010101₂ = 10101₂."],["Convert 2F₁₆ to binary.","101111","2 = 0010 and F = 1111 in binary, giving 00101111₂ = 101111₂."]],
            decimal:[["Convert 25₁₀ to binary.","11001","25 ÷ 2 remainders read upwards give 11001₂."],["Convert 31₁₀ to octal.","37","31 ÷ 8 = 3 remainder 7, so the answer is 37₈."],["Convert 47₁₀ to hexadecimal.","2F","47 ÷ 16 = 2 remainder 15; 15 is F in hexadecimal, so 2F₁₆."],["Convert 101101₂ to decimal.","45","32 + 0 + 8 + 4 + 0 + 1 = 45₁₀."]],
            octal:[["Convert 17₈ to decimal.","15","1×8 + 7×1 = 15₁₀."],["Convert 25₈ to binary.","10101","2 = 010 and 5 = 101 in 3-bit binary. Remove the leading zero: 10101₂."],["Convert 64₈ to decimal.","52","6×8 + 4 = 52₁₀."],["Convert 2D₁₆ to octal.","55","2D₁₆ = 45₁₀; 45 ÷ 8 gives 5 remainder 5, so 55₈."]],
            hexadecimal:[["Convert 2F₁₆ to decimal.","47","2×16 + 15 = 47₁₀."],["Convert 101101₂ to hexadecimal.","2D","Group binary digits into fours: 0010 1101 = 2D₁₆."],["Convert 75₁₀ to hexadecimal.","4B","75 ÷ 16 = 4 remainder 11; 11 is B, so 4B₁₆."],["Convert 57₈ to hexadecimal.","2F","57₈ = 47₁₀ = 2F₁₆."]]
          })[key].map(([q,a,explanation],i)=>`<article class="conversion-practice-card" data-answer="${a}" data-explanation="${explanation}"><div class="conversion-question-label">CONVERSION ${i+1}</div><h3>${q}</h3><div class="conversion-answer-row"><label class="sr-only" for="conversionAnswer${i}">Your answer for question ${i+1}</label><input id="conversionAnswer${i}" type="text" autocomplete="off" spellcheck="false" placeholder="Type your answer"><button type="button" class="btn btn-gold check-conversion-answer">Check Answer</button></div><div class="conversion-feedback" aria-live="polite"></div></article>`).join("")}
        </div>
      </section>



      <section class="ppt-resource-card">
        <div class="ppt-resource-icon">▤</div>
        <div class="ppt-resource-copy">
          <span class="eyebrow">ADDITIONAL READING RESOURCE</span>
          <h2>Place Value Charts – Learning Guide</h2>
          <p>Download the PowerPoint guide to study detailed place-value tables for Binary, Decimal, Octal and Hexadecimal. It includes worked examples, explanations, practice questions and answers.</p>
          <a class="btn btn-dark" href="assets/learning-materials/Number_System_Place_Value_Charts_Learning_Guide.pptx" download>⬇ Download PowerPoint Reading Material</a>
        </div>
      </section>
      </div>`;
  } else {
    body = `<div class="quiz-intro"><span class="quiz-emblem">✦</span><h2>${t.name} Challenge</h2><p>Answer the practice questions below, review your explanations, and then try the interactive game.</p><div class="quiz-perks"><span>✎ ${t.questions.length} practice questions</span><span>✓ Instant score and explanations</span><span>🎮 Interactive game challenge</span></div></div>
      <div class="quiz-level-selector" role="group" aria-label="Choose quiz level">
        <button type="button" class="quiz-level-button is-active" data-quiz-level="beginner"><span>01</span><strong>Beginner</strong><small>Build your basics · 3 questions</small></button>
        <button type="button" class="quiz-level-button is-locked" data-quiz-level="intermediate" disabled><span>02</span><strong>Intermediate</strong><small>Strengthen your skills · 4 questions</small><em>🔒 Complete Beginner first</em></button>
        <button type="button" class="quiz-level-button is-locked" data-quiz-level="challenge" disabled><span>03</span><strong>Challenge</strong><small>Test your mastery · 3 questions</small><em>🔒 Complete Intermediate first</em></button>
      </div>
      <div class="quiz-learning-guide">
        <div class="quiz-guide-icon">✦</div><div><strong>How to use this quiz</strong><p>Read each question, choose one answer and check your progress. After submitting, review the explanations to understand why each answer is correct.</p></div>
      </div>
      <div class="quiz-progress-wrap"><div class="quiz-progress-top"><span id="quizProgressText">0 of ${t.questions.length} answered</span><span>${t.questions.length} questions</span></div><div class="quiz-progress-track"><span id="quizProgressBar"></span></div></div>
      <form id="quizForm" class="practice-quiz-form" novalidate>
        <div class="quiz-question-grid">
        ${t.questions.map((question,index)=>`<article class="quiz-question" data-quiz-level="${index < 3 ? "beginner" : index < 7 ? "intermediate" : "challenge"}" ${index >= 3 ? "hidden" : ""}><div class="quiz-question-top"><span class="quiz-number">QUESTION ${String(index+1).padStart(2,"0")}</span><span class="quiz-mark">1 POINT</span></div><p>${question.q}</p><div class="quiz-options-grid">${question.o.map((option,optIndex)=>`<label class="quiz-option"><input type="radio" name="q${index}" value="${optIndex}" required><span class="quiz-option-letter">${String.fromCharCode(65+optIndex)}</span><span class="quiz-option-text">${option}</span><span class="quiz-option-check">✓</span></label>`).join("")}</div><div class="quiz-feedback" id="feedback${index}" aria-live="polite"></div></article>`).join("")}
        </div>
        <div class="quiz-controls"><button class="btn btn-dark" type="submit">Check My Answers <span aria-hidden="true">→</span></button><button class="btn btn-outline-dark" type="reset">Start Again ↻</button></div>
        <div class="result" id="quizResult" aria-live="polite"></div>
      </form>
      <div class="genially-extra"><h2>Extra interactive game</h2><p>After completing the practice questions, challenge yourself with the topic game.</p><iframe class="genially-frame" src="${t.quizUrl}/embedded" title="${t.name} interactive quiz" allowfullscreen></iframe><p class="empty-note">If the game does not load, <a href="${t.quizUrl}" target="_blank" rel="noopener">open it directly in Genially</a>.</p></div>`;
  }
  return `<section class="page-banner"><span class="eyebrow">${t.base} · ${t.name}</span><h1>${title}</h1><p>${type === "video" ? "Watch the lesson and use the player controls to pause, replay and move through the video." : type === "reading" ? "Explore the designed learning notes, concepts and worked examples." : "Play the topic game and test what you have learned."}</p></section>
    <div class="breadcrumb"><button data-route="home">Home</button> / ${t.name} / ${title}</div>
    <section class="section"><div class="content-card"><div class="activity-back"><button class="back-arrow" id="returnButton" aria-label="Back to topic options" title="Back to topic options">←</button><span>Back to Home and all topic options</span></div><h2>${title}: ${t.name}</h2>${body}</div></section>`;
}

function aboutPage() {
  const members = [
    ["Sujal Gurung", "assets/team/sujal-gurung.jpg"],
    ["Kinley Yangden", "assets/team/kinley-yangden.jpg"],
    ["Dechen Choden", "assets/team/dechen-choden.jpg"],
    ["Tshering Dolkar", "assets/team/tshering-dolkar.jpg"]
  ];
  return `<section class="page-banner"><span class="eyebrow">Meet the team</span><h1>About Us</h1><p>We are the team behind this Digital Number System learning website.</p></section>
    <section class="section"><div class="section-heading"><span class="eyebrow" style="color:#a87916">Our team</span><h2>Meet the Creators</h2><p>Working together to make learning digital number systems engaging, accessible and enjoyable.</p></div>
    <div class="team-grid">${members.map(([name,photo]) => `<article class="team-card"><img src="${photo}" alt="${name}"><div class="team-card-info"><span class="team-kicker">DIGITAL NUMBER SYSTEM</span><h3>${name}</h3></div></article>`).join("")}</div>
    <div class="about-note"><span>✦</span><p>Inspired by Bhutanese art, culture and the spirit of collaborative learning.</p></div></section>`;
}
function sectionHubPage(section) {
  const cfg = {
    videos: ["Videos", "Watch the introduction and topic-based video lessons."],
    "learning-materials": ["Learning Materials", "Choose a number system to explore its designed reading materials."],
    quizzes: ["Quizzes", "Choose a number system and play its interactive quiz."]
  }[section];
  const intro = section === "videos" ? `<div class="content-card"><h2>Introduction to Number Systems</h2><p>Begin with this introduction before exploring the four number systems.</p><video class="video-player" controls preload="metadata" playsinline><source src="assets/videos/introduction-video.mp4" type="video/mp4">Your browser does not support this video.</video></div>` : "";
  return `<section class="page-banner"><span class="eyebrow">Digital Number System</span><h1>${cfg[0]}</h1><p>${cfg[1]}</p></section><section class="section">${intro}${section === "quizzes" ? `<div class="content-card general-quiz"><h2>Number Systems: General Challenge</h2><p>Try this overall quiz to review all four number systems.</p><iframe class="genially-frame" src="https://view.genially.com/6aafc9f536c740f6b5b8b3e2/embedded" title="General number systems quiz" allowfullscreen></iframe></div>` : ""}<div class="section-heading"><h2>Choose a number system</h2></div>${topicCards()}</section>`;
}

function setupScrollReveals() {
  const revealTargets = document.querySelectorAll(".welcome-redesign, .section-heading, .topic-home-card, .home-tool-card, .daily-challenge, .content-card, .action-card, .team-card");
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach(element => observer.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add("is-visible"));
  }
}


function getLearningHistory() {
  try { return JSON.parse(localStorage.getItem("dnsLearningHistory") || "[]"); }
  catch (error) { return []; }
}
function saveLearningActivity(activity) {
  const history = getLearningHistory();
  history.unshift({ ...activity, date: new Date().toISOString() });
  localStorage.setItem("dnsLearningHistory", JSON.stringify(history.slice(0, 60)));
}
function historyPage() {
  const history = getLearningHistory();
  const quizEntries = history.filter(item => item.type === "quiz");
  const totalAttempts = quizEntries.length;
  const average = totalAttempts
    ? Math.round(quizEntries.reduce((sum, item) => sum + (item.percent || 0), 0) / totalAttempts)
    : 0;
  const best = totalAttempts ? Math.max(...quizEntries.map(item => item.percent || 0)) : 0;
  const rows = history.length ? history.map(item => {
    const date = new Date(item.date);
    const detail = item.type === "quiz"
      ? `Quiz completed · ${item.score}/${item.total} correct · ${item.percent}%`
      : item.detail || "Learning activity";
    return `<article class="history-entry"><span class="history-entry-icon">${item.type === "quiz" ? "✦" : "✓"}</span><div><strong>${item.title || "Learning activity"}</strong><p>${detail}</p><small>${date.toLocaleString()}</small></div><span class="history-entry-tag">${item.type === "quiz" ? "QUIZ" : "ACTIVITY"}</span></article>`;
  }).join("") : `<div class="history-empty"><span>༄</span><h3>Your learning journey starts here</h3><p>Complete a lesson or quiz and your recent activity will appear here automatically on this device.</p><button class="btn btn-gold" data-route="learning-materials">Start learning →</button></div>`;
  return `<section class="page-banner history-banner"><span class="eyebrow">YOUR PERSONAL LEARNING SPACE</span><h1>My Learning History</h1><p>Look back at your practice, celebrate your progress and keep moving forward.</p></section>
    <section class="section history-section">
      <div class="history-stats">
        <div class="history-stat"><span>QUIZ ATTEMPTS</span><strong>${totalAttempts}</strong><small>Keep practising</small></div>
        <div class="history-stat"><span>AVERAGE SCORE</span><strong>${average}%</strong><small>Across your quizzes</small></div>
        <div class="history-stat"><span>PERSONAL BEST</span><strong>${best}%</strong><small>Your highest quiz score</small></div>
      </div>
      <div class="history-heading"><div><span class="eyebrow">RECENT ACTIVITY</span><h2>Your learning timeline</h2></div><button class="btn btn-outline-dark" id="clearHistoryBtn" ${history.length ? "" : "disabled"}>Clear history</button></div>
      <div class="history-list">${rows}</div>
      <p class="history-note">Your history is saved in this browser on this device. It is not shared with other students or devices.</p>
    </section>`;
}

function render(route) {
  const safeRoute = normaliseRoute(route);
  const sectionMatch = safeRoute.match(/^(videos|learning-materials|quizzes)-(binary|decimal|octal|hexadecimal)$/);

  // Use the Bhutanese support-and-learning artwork on all learning areas,
  // while keeping the homepage and About page's own visual design unchanged.
  const useLearningBackground =
    ["videos", "learning-materials", "quizzes", "history", "about"].includes(safeRoute) ||
    Boolean(sectionMatch);
  document.body.classList.toggle("learning-background-page", useLearningBackground);

  if (safeRoute === "history") {
    app.innerHTML = historyPage();
  } else if (safeRoute === "home" || safeRoute === "explore") {
    app.innerHTML = homePage();
  } else if (safeRoute === "about") {
    app.innerHTML = aboutPage();
  } else if (sectionMatch) {
    const [, section, topicKey] = sectionMatch;
    const type = section === "videos" ? "video" : section === "learning-materials" ? "reading" : "quiz";
    const title = section === "videos" ? "Videos" : section === "learning-materials" ? "Learning Materials" : "Quizzes";
    app.innerHTML = activityPage(topicKey, type, title);
    if (type !== "quiz") saveLearningActivity({ type: "activity", title: `${topics[topicKey].name} · ${title}`, detail: type === "video" ? "Opened a video lesson" : "Opened learning notes" });
  } else if (["videos", "learning-materials", "quizzes"].includes(safeRoute)) {
    app.innerHTML = sectionHubPage(safeRoute);
  } else {
    app.innerHTML = homePage();
  }

  const activeSection = sectionMatch ? sectionMatch[1] : safeRoute;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeSection}`);
  });

  setupScrollReveals();

  document.querySelectorAll(".check-conversion-answer").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".conversion-practice-card");
      const input = card.querySelector("input");
      const feedback = card.querySelector(".conversion-feedback");
      const clean = value => value.toUpperCase().replace(/₍?₂₎?|₈|₁₀|₁₆/g,"").replace(/\s+/g,"").replace(/^0+(?=.)/,"");
      if (!input.value.trim()) {
        feedback.className = "conversion-feedback is-error";
        feedback.textContent = "Enter your answer first, then check it.";
        return;
      }
      if (clean(input.value) === clean(card.dataset.answer)) {
        feedback.className = "conversion-feedback is-correct";
        feedback.innerHTML = `<strong>✓ Correct!</strong> ${card.dataset.explanation}`;
        card.classList.add("answered-correct");
      } else {
        feedback.className = "conversion-feedback is-error";
        feedback.innerHTML = `<strong>Not quite yet.</strong> Try again. Hint: ${card.dataset.explanation}`;
        card.classList.remove("answered-correct");
      }
    });
  });

  const converterForm = document.getElementById("converterForm");
  if (converterForm) {
    const fromSelect = document.getElementById("convertFrom");
    const toSelect = document.getElementById("convertTo");
    const input = document.getElementById("convertInput");
    const hint = document.getElementById("converterHint");
    const output = document.getElementById("converterResult");
    const baseNames = {2:"Binary",8:"Octal",10:"Decimal",16:"Hexadecimal"};
    const validDigits = {2:/^[01]+$/i,8:/^[0-7]+$/i,10:/^[0-9]+$/i,16:/^[0-9a-f]+$/i};
    const examples = {2:"1011",8:"25",10:"42",16:"2F"};
    const updateHint = () => {
      const b = Number(fromSelect.value);
      hint.textContent = b === 2 ? "Binary accepts only 0 and 1." : b === 8 ? "Octal accepts digits 0 to 7." : b === 10 ? "Decimal accepts digits 0 to 9." : "Hexadecimal accepts 0 to 9 and letters A to F.";
      input.placeholder = `Example: ${examples[b]}`;
    };
    const convert = (event) => {
      if (event) event.preventDefault();
      const from = Number(fromSelect.value), to = Number(toSelect.value);
      const raw = input.value.trim().replace(/\\s+/g,"");
      if (!raw) { output.innerHTML = '<p class="converter-error">Please enter a number to convert.</p>'; return; }
      if (!validDigits[from].test(raw)) {
        output.innerHTML = `<p class="converter-error">“${raw.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}” is not valid in ${baseNames[from]}. ${hint.textContent}</p>`;
        return;
      }
      try {
        const decimalValue = from === 10 ? BigInt(raw) : BigInt("0" + (from === 16 ? "x" : from === 8 ? "o" : "b") + raw);
        const converted = decimalValue.toString(to).toUpperCase();
        const fromLabel = `${raw.toUpperCase()}${({2:"₂",8:"₈",10:"₁₀",16:"₁₆"})[from]}`;
        const toLabel = `${converted}${({2:"₂",8:"₈",10:"₁₀",16:"₁₆"})[to]}`;
        output.innerHTML = `<div class="converter-answer-kicker">CONVERSION COMPLETE</div><div class="converter-answer">${toLabel}</div><p class="converter-equation">${fromLabel} = ${decimalValue.toString(10)}₁₀ = ${toLabel}</p><div class="converter-steps"><strong>How it works</strong><ol><li>Read <strong>${raw.toUpperCase()}</strong> as a base-${from} number.</li><li>Its decimal value is <strong>${decimalValue.toString(10)}</strong>.</li><li>Express that value in base ${to} (${baseNames[to]}): <strong>${converted}</strong>.</li></ol></div><button type="button" class="converter-copy" id="copyConversion">Copy answer</button>`;
        const copy = document.getElementById("copyConversion");
        copy.addEventListener("click", async () => {
          try { await navigator.clipboard.writeText(toLabel); copy.textContent = "Copied!"; }
          catch { copy.textContent = "Select the answer above to copy"; }
        });
        if (typeof saveLearningActivity === "function") saveLearningActivity({type:"activity",title:"Number conversion",detail:`Converted ${fromLabel} to ${toLabel}`});
      } catch (error) {
        output.innerHTML = '<p class="converter-error">That number is too large to convert. Please try a shorter number.</p>';
      }
    };
    converterForm.addEventListener("submit", convert);
    fromSelect.addEventListener("change", updateHint);
    document.getElementById("swapBases").addEventListener("click", () => {
      const previous = fromSelect.value; fromSelect.value = toSelect.value; toSelect.value = previous; updateHint(); convert();
    });
    document.querySelectorAll("[data-convert-example]").forEach(button => button.addEventListener("click", () => {
      input.value = button.dataset.convertExample; fromSelect.value = button.dataset.from; toSelect.value = button.dataset.to; updateHint(); convert();
    }));
    updateHint();
  }

  const backButton = document.getElementById("returnButton");
  if (backButton) backButton.addEventListener("click", () => navigate("home"));

  const quizForm = document.getElementById("quizForm");
  if (quizForm && sectionMatch && sectionMatch[1] === "quizzes") {
    const topicKey = sectionMatch[2];
    const levelOrder = ["beginner", "intermediate", "challenge"];
    const levelButtons = [...document.querySelectorAll(".quiz-level-button")];
    let activeLevel = "beginner";
    const unlockedLevels = new Set(["beginner"]);
    const allCards = [...quizForm.querySelectorAll(".quiz-question")];
    const cardsForLevel = () => allCards.filter(card => card.dataset.quizLevel === activeLevel);
    const updateQuizProgress = () => {
      const activeCards = cardsForLevel();
      const answered = activeCards.filter(card => card.querySelector('input[type="radio"]:checked')).length;
      const progressText = document.getElementById("quizProgressText");
      const progressBar = document.getElementById("quizProgressBar");
      progressText.textContent = `${answered} of ${activeCards.length} answered in ${activeLevel.charAt(0).toUpperCase()+activeLevel.slice(1)}`;
      progressBar.style.width = `${(answered / activeCards.length) * 100}%`;
      activeCards.forEach(card => card.classList.toggle("question-complete", !!card.querySelector('input[type="radio"]:checked')));
    };
    const showLevel = (level) => {
      if (!unlockedLevels.has(level)) return;
      activeLevel = level;
      allCards.forEach(card => {
        const visible = card.dataset.quizLevel === level;
        card.hidden = !visible;
        if (!visible) card.classList.remove("is-correct","is-incorrect","question-complete");
      });
      levelButtons.forEach(button => {
        button.classList.toggle("is-active",button.dataset.quizLevel===level);
        button.classList.toggle("is-locked",!unlockedLevels.has(button.dataset.quizLevel));
        button.disabled = !unlockedLevels.has(button.dataset.quizLevel);
        const lock = button.querySelector("em");
        if (lock) lock.textContent = unlockedLevels.has(button.dataset.quizLevel) ? "✓ Level unlocked" : `🔒 Complete ${levelOrder[levelOrder.indexOf(button.dataset.quizLevel)-1]} first`;
      });
      document.getElementById("quizResult").style.display = "none";
      updateQuizProgress();
      document.querySelector(".quiz-progress-wrap").scrollIntoView({behavior:"smooth",block:"nearest"});
    };
    levelButtons.forEach(button => button.addEventListener("click", () => showLevel(button.dataset.quizLevel)));
    quizForm.addEventListener("change", updateQuizProgress);
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const activeCards = cardsForLevel();
      let score = 0;
      let unanswered = 0;
      activeCards.forEach(card => {
        const index = allCards.indexOf(card);
        const question = topics[topicKey].questions[index];
        const selected = card.querySelector(`input[name="q${index}"]:checked`);
        const feedback = card.querySelector(".quiz-feedback");
        card.classList.remove("is-correct","is-incorrect");
        if (!selected) {
          unanswered++;
          card.classList.add("is-incorrect");
          feedback.innerHTML = `<strong>Not answered yet.</strong> ${question.e}`;
        } else if (Number(selected.value) === question.a) {
          score++;
          card.classList.add("is-correct");
          feedback.innerHTML = `<strong>✓ Correct answer!</strong> ${question.e}`;
        } else {
          card.classList.add("is-incorrect");
          feedback.innerHTML = `<strong>✦ Correct answer: ${question.o[question.a]}</strong><br>${question.e}`;
        }
      });
      const total = activeCards.length;
      const percent = Math.round((score / total) * 100);
      const levelIndex = levelOrder.indexOf(activeLevel);
      const nextLevel = levelOrder[levelIndex+1];
      let progression = "";
      if (percent >= 70 && nextLevel) {
        unlockedLevels.add(nextLevel);
        progression = `<button type="button" class="btn btn-gold" id="goNextQuizLevel">Unlock ${nextLevel.charAt(0).toUpperCase()+nextLevel.slice(1)} →</button>`;
      } else if (percent >= 70) {
        progression = `<p class="quiz-level-complete">🏆 You completed all three levels. Excellent work!</p>`;
      } else {
        progression = `<p class="quiz-level-encourage">You need at least 70% to unlock the next level. Review the explanations and try this level again.</p>`;
      }
      const result = document.getElementById("quizResult");
      result.style.display = "block";
      saveLearningActivity({type:"quiz",title:`${topics[topicKey].name} – ${activeLevel} level`,score,total,percent});
      result.innerHTML = `<div class="quiz-result-inner"><div class="quiz-result-medal">${percent>=70?"🏆":"📘"}</div><div><span class="quiz-result-kicker">${activeLevel.toUpperCase()} LEVEL RESULT</span><h2>${score} / ${total} correct</h2><p>${percent}% score · ${total-unanswered} answered · ${unanswered} unanswered</p><strong>${percent>=70?"Well done! You passed this level.":"Keep practising. You can do it!"}</strong></div><div class="quiz-result-percent">${percent}%</div></div><div class="quiz-progression-action">${progression}</div>`;
      const nextButton=document.getElementById("goNextQuizLevel");
      if(nextButton) nextButton.addEventListener("click",()=>showLevel(nextLevel));
      result.scrollIntoView({behavior:"smooth",block:"center"});
      updateQuizProgress();
    });
    quizForm.addEventListener("reset", () => {
      window.setTimeout(() => {
        quizForm.querySelectorAll(".quiz-feedback").forEach(item => item.textContent="");
        quizForm.querySelectorAll(".quiz-question").forEach(card=>card.classList.remove("is-correct","is-incorrect","question-complete"));
        document.getElementById("quizResult").style.display="none";
        updateQuizProgress();
      },0);
    });
    showLevel("beginner");
  }
}

document.addEventListener("click", (event) => {
  if (event.target && event.target.id === "clearHistoryBtn") {
    if (confirm("Clear your learning history saved on this device?")) {
      localStorage.removeItem("dnsLearningHistory");
      render("history");
    }
  }
});

render(currentRoute);
