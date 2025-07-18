export const data = [
  {
    q: `
for (let i = 0; i < 10; i++)
 {
  console.log(
  "What is Dhoni's jersey number?"
  );
  console.log("10 20 30 ")

 }
// type the output 
  `,

    ans: "10 20 30",
    hint: "Go to the Room No 7",
  },


  {
    q: `
     public class ForLoopMystery {
     public static void main(String[] args) {
        int count = 0;
        for (int i = 0; i < 5; i++, i++) {
            count++;
        }
        System.out.println("Final count: " + count);
     }
   }

    // what's the Value of  Count
    `,
    ans: "3",
    hint: "Go to the Room No 7 ",
  },


  {
    q: `
    public class LoopTrap {
    public static void main(String[] args) {
        int a = 5;
        for (int i = 0; i < a; i++) {
            a--;
        }
        System.out.println("Final value of a: " + a);
    }
}
    `,
    ans: "2",
    hint: "Go to the Room No 7",
  },
  {
    q: `
    public class LoopIllusion {
    public static void main(String[] args) {
        int x = 0;
        for (int i = 0; i < 5; System.out.print(i++)) {
            x++;
        }
        System.out.println("\nFinal value of x: " + x);
    }
}
    `,
    ans: "5",
    hint: "Go to the Room No 7",
  },
  {
    q: `
    public class NumericLoopTwist {
    public static void main(String[] args) {
        int i = 0;
        int sum = 0;
        for (; i++ < 5;) {
            sum += i; 
        }
        System.out.println(sum++);
    }
}
    // what's the value of Variable sum ?
    `,
    ans: "15",
    hint: "Go to the Room No 7 ",
  },
 
];
