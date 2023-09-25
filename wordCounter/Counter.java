import java.io.*;
import java.util.Map;
import java.util.Scanner;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicReference;

public class Counter {
    public static void main(String[] args) throws IOException {
        //reading the input file
        BufferedReader br= new BufferedReader(new FileReader("C:\\\\Users\\\\HEMS\\\\Desktop\\\\wordCounter\\\\input.txt"));
        //using scanner so that we can parse the data
        Scanner sc=new Scanner(br);
        //creating a new file for writing the data
        File file=new File("C:\\Users\\HEMS\\Desktop\\wordCounter\\output.txt");
        file.createNewFile();
        //file writer object to write to the file
        FileWriter fw=new FileWriter("output.txt");

        ExecutorService exe= Executors.newFixedThreadPool(5);
        AtomicReference<Map<String, Integer>> map = new AtomicReference<>();
        while (sc.hasNextLine()){
            exe.submit(()->{
                map.set(new ConcurrentHashMap<>());
                while(sc.hasNext()){
                    String word=sc.next();
                    map.get().put(word, map.get().getOrDefault(word,0)+1);
                }
            });
            for(Map.Entry<String,Integer> l: map.get().entrySet()){
                String key=l.getKey();
                int val=l.getValue();
                fw.append(key+"  ");
                fw.append(val +"  ");
                fw.append("\n");
            }
            map.get().clear();
            exe.shutdown();
        }
        fw.close();
        br.close();
    }
}
//other ways to read an file
//        FileReader fr=new FileReader(
//                "C:\\Users\\HEMS\\Dropbox\\PC\\Desktop\\wordCounter"
//        );