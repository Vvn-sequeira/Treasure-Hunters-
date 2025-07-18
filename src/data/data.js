export const data = [
    {
      q: `
  for (let i = 0; i < 10; i++) {
    console.log("What is Dhoni's jersey number?");
    console.log("10 20 30");
  }
  // Type the output
      `,
      ans: "10 20 30",
      hint: "Go to the Red Locker near the stairs",
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
  // What's the value of count?
      `,
      ans: "3",
      hint: "Check the notice board in Room No. 3",
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
  // What is the final value of a?
      `,
      ans: "2",
      hint: "Look under the table in the library",
    },
    {
      q: `
  public class LoopIllusion {
    public static void main(String[] args) {
      int x = 0;
      for (int i = 0; i < 5; System.out.print(i++)) {
        x++;
      }
      System.out.println("\\nFinal value of x: " + x);
    }
  }
  // What will be the final value of x?
      `,
      ans: "5",
      hint: "Go to the staircase landing, 2nd floor",
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
  // What is the final value printed?
      `,
      ans: "15",
      hint: "Look behind the classroom door of Room 5",
    },
    {
      q: `
  public class TrickyForLoop {
    public static void main(String[] args) {
      int x = 0;
      for (int i = 0; i < 10; i++) {
        for (int j = i; j < 10; j += 5) {
          x++;
        }
      }
      System.out.println("Value of x: " + x);
    }
  }
  // What is the final value of x?
      `,
      ans: "15",
      hint: "Check under the bench in the front row",
    },
    {
      q: `
  public class InfiniteFor {
    public static void main(String[] args) {
      for (int i = 0; i < 10; ) {
        System.out.println(i);
        i = i - 1 + 2;
      }
    }
  }
  // Will this loop end? If not, why?
      `,
      ans: "No, it's an infinite loop",
      hint: "Go to the water cooler area",
    },
    {
      q: `
  public class LoopSkip {
    public static void main(String[] args) {
      for (int i = 0; i < 10; i++) {
        if (i % 3 == 0) continue;
        System.out.print(i + " ");
      }
    }
  }
  // What's the output?
      `,
      ans: "1 2 4 5 7 8",
      hint: "Next clue is taped behind the projector",
    },
    {
      q: `
  public class Countdown {
    public static void main(String[] args) {
      for (int i = 5; i >= 0; i--) {
        for (int j = 0; j < i; j++) {
          System.out.print("*");
        }
        System.out.println();
      }
    }
  }
  // How many total asterisks printed?
      `,
      ans: "15",
      hint: "Go to the whiteboard in Room No. 1",
    },
    {
      q: `
  public class ReverseSum {
    public static void main(String[] args) {
      int total = 0;
      for (int i = 10; i > 0; i -= 2) {
        total += i;
      }
      System.out.println("Sum: " + total);
    }
  }
  // What's the final value of total?
      `,
      ans: "30",
      hint: "Your next clue is inside the drawer marked X",
    }

  
 
];
