/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package javawithgradle;

public class App {
    public String getGreeting() {
        return "Hello World!";
    }

    public static void main(String[] args) {
        System.out.println(new App().getGreeting());

        System.out.printf("Hello i am from Inside the Main\n");
    }
}
