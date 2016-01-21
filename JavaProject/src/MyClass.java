
public class MyClass {
	MyClass(){

		System.out.println("Cons.");	
	}
void MyClass(){
	System.out.println("Hello");
}
public static void main(String args[]){
	MyClass m=new MyClass();
	m.MyClass();
	System.out.println("");
}
}
