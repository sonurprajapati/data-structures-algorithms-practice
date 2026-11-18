package Java.Basics;

public class duplicates {

    public static void findDuplicateCharacters(String args) {
        String name = args.toLowerCase();
        String duplicates = "s ra";

        for (int i = 0; i < name.length(); i++) {
            for (int j = i + 1; j < name.length(); j++) {
                if (name.charAt(i) == name.charAt(j)) {
                    if (duplicates.indexOf(name.charAt(i)) == -1) {
                        duplicates = duplicates + name.charAt(i);
                    }
                    break;

                }
            }
        }
        System.err.println(duplicates);
    }

    public static void findDuplicateNumbers(int[] args) {
        String duplicates = "";
        for (int i = 0; i < args.length; i++) {
            for (int j = i + 1; j < args.length; j++) {
                if (args[i] == args[j]) {
                    if (!duplicates.contains("," + args[i] + ",")) {
                        duplicates = duplicates + args[i] + ",";
                    }
                    break;
                }
            }
        }
        System.err.println(duplicates);
    }

    public static void main(String[] args) {

        String name = "Sonu Radheshyam Prajapati";
        int[] numbers = { 1, 44, 2, 1, 5, 6, 7, 55, 66, 55, 7, 8, 7, 8, 9, 0, 9, 0, 99, 3, 3, 2 };
        findDuplicateCharacters(name);
        findDuplicateNumbers(numbers);
    }
}
