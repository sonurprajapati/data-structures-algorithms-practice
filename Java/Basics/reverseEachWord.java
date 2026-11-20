package Java.Basics;

public class reverseEachWord {
    public static void main(String[] args) {
        String sentance = "my name is sonu prajapati";
        String[] newArr = sentance.split(" ");
        String[] finalArr = new String[newArr.length];
        for(int i=0; i<newArr.length; i++){
            String temp = newArr[i];
            String rev = "";
            for(int j=temp.length()-1; j>=0; j--){
                rev = rev + temp.charAt(j);
                finalArr[i] = rev;
            }
        }
        System.err.println(String.join(" ", finalArr));
    }
}
