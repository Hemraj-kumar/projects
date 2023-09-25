import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Task implements Runnable{
    private String name;
    public Task(String name){
        this.name=name;
    }
    public void run(){
            try {
                Date d=new Date();
                SimpleDateFormat ft=new SimpleDateFormat(" hh:mm:ss");
                System.out.println("Thread created with "+name+ft.format(d));
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
    }

}
public class myRunnable{
    public static void main(String[] args) {
        ExecutorService exe= Executors.newCachedThreadPool();
        for(int i=0;i<10;i++) {
            Runnable run=new Task("thread"+i);
            exe.execute(run);
        }
        exe.shutdown();
        while(!exe.isTerminated()){}
        System.out.println("executed all requests");
    }
}

//newCachedThreadPool() function creates as many threads as possible according to the request,
//which means dynamic sizing.

//newFixedThreadPool() fn which creates limited no.of threads or the no.of threads that we have mentioned,
//it reuses the threads once an request is fulfilled.
