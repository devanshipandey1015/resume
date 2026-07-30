import type { Project, QuizQuestion, Topic } from '../types';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'databases', label: 'Databases' },
  { id: 'android', label: 'Android' },
  { id: 'tools', label: 'Tools' },
  { id: 'coursework', label: 'Coursework' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'questions', label: 'Interview Bank' },
  { id: 'quiz', label: 'Quiz' },
] as const;

export const topics: Topic[] = [
  {
  id: 'c',
  title: 'C',
  category: 'languages',
  short:
    'A procedural, compiled language that provides efficient execution and direct control over memory.',

  simple: [
    'C is a general-purpose, procedural and compiled programming language.',

    'A procedural language organises a program mainly around functions, variables, conditions, loops and step-by-step instructions.',

    'C is statically typed, which means the type of a variable is declared before the program is executed.',

    'C is compiled into machine code before execution, which generally gives it fast performance and low runtime overhead.',

    'C provides direct access to memory through pointers. A pointer stores the memory address of another variable.',

    'C does not provide built-in classes, inheritance, polymorphism or automatic garbage collection.',

    'The programmer is responsible for allocating and releasing dynamically allocated memory.',

    'C is commonly used for operating systems, embedded systems, microcontrollers, device drivers, compilers and performance-sensitive applications.',

    'C is case-sensitive. For example, value, Value and VALUE are treated as different identifiers.',

    'C is considered portable because a correctly written C program can usually be compiled on multiple systems with limited changes.',

    'The C standard library provides reusable functions for input, output, strings, memory management, mathematics and file handling.',

    'Learning C helps you understand how variables are stored, how memory is addressed and how data structures work internally.'
  ],

  technical: [
    'A C program normally begins execution from the main function.',

    'The build process generally consists of preprocessing, compilation, assembly and linking.',

    'The preprocessor handles directives such as #include, #define, #if and header guards before normal compilation begins.',

    'The compiler checks the program and translates C source code into lower-level instructions.',

    'The assembler converts assembly instructions into object code, and the linker combines object files and libraries into an executable.',

    'Basic C data types include char, int, float, double and void. Modifiers such as short, long, signed and unsigned change the range or representation of some types.',

    'The exact size of many C data types can depend on the compiler and system architecture. The sizeof operator should be used when the actual size is required.',

    'A pointer stores a memory address. Dereferencing a valid pointer using the * operator accesses the value stored at that address.',

    'The & operator returns the address of a variable, while the * operator can declare or dereference a pointer depending on context.',

    'C always passes function arguments by value. Pointer parameters are used when a function needs to modify data owned by the caller.',

    'An array is not the same thing as a pointer, although an array expression often converts or decays into a pointer to its first element.',

    'A C string is normally stored as an array of characters ending with the null terminator character \\0.',

    'Structures group multiple related values of potentially different types into one user-defined type.',

    'A union allows multiple members to share the same memory location. Only one member value is meaningfully stored at a time.',

    'An enum defines a set of named integer constants, improving readability when representing a fixed set of values.',

    'Automatic local variables are commonly associated with stack storage, while dynamically allocated memory is obtained from the heap.',

    'malloc allocates a requested number of bytes but does not initialise them.',

    'calloc allocates memory for multiple elements and initialises the allocated bytes to zero.',

    'realloc changes the size of an existing memory block and may move it to a new address.',

    'free releases dynamically allocated memory. Accessing memory after it has been freed creates undefined behaviour.',

    'A memory leak occurs when dynamically allocated memory is no longer reachable but has not been released.',

    'A dangling pointer points to memory that is no longer valid, such as memory that has already been freed.',

    'A wild pointer is an uninitialised pointer that contains an unpredictable address.',

    'A null pointer intentionally points to no valid object. It should be checked before dereferencing.',

    'The const keyword prevents modification through a particular variable or pointer access path.',

    'The meaning of static depends on context. A static local variable retains its value between function calls, while a file-level static symbol has internal linkage.',

    'The extern keyword declares that a variable or function is defined in another source file or elsewhere in the program.',

    'Header files usually contain declarations, type definitions, constants and function prototypes that are shared between source files.',

    'Header guards prevent the same header file from being processed multiple times in one translation unit.',

    'Macros perform text substitution before compilation. They should be used carefully because they do not provide normal function type checking.',

    'Bitwise operators such as &, |, ^, ~, << and >> are useful for flags, masks, embedded systems and low-level data manipulation.',

    'Undefined behaviour occurs when a program performs an operation for which the C standard defines no required result, such as accessing an array outside its bounds.',

    'A segmentation fault often occurs when a program accesses invalid or protected memory.',

    'C does not automatically check array bounds, pointer validity or whether allocated memory has been released correctly.'
  ],

  interview:
    'C is a procedural, statically typed and compiled programming language. It provides low-level memory access through pointers while supporting structured programming through functions, loops and conditions. I studied C to understand memory management, pointers, program execution and the internal implementation of data structures. It is especially useful in systems and embedded programming where performance and hardware-level control are important.',

  keyPoints: [
    'Procedural programming',
    'Static typing',
    'Compilation process',
    'Pointers',
    'Arrays',
    'Strings',
    'Structures',
    'Stack and heap',
    'Dynamic memory allocation',
    'Header files',
    'File handling',
    'Bitwise operators',
    'Undefined behaviour'
  ],

  code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
} Student;

void updateAge(Student *student, int newAge) {
    if (student != NULL) {
        student->age = newAge;
    }
}

int main(void) {
    int value = 25;
    int *pointer = &value;

    printf("Value: %d\\n", value);
    printf("Address: %p\\n", (void *)pointer);
    printf("Value through pointer: %d\\n", *pointer);

    Student student = {"Devanshi", 20};
    updateAge(&student, 21);

    printf("%s is %d years old.\\n", student.name, student.age);

    int count = 5;

    int *numbers = malloc((size_t)count * sizeof(*numbers));

    if (numbers == NULL) {
        fprintf(stderr, "Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < count; i++) {
        numbers[i] = (i + 1) * 10;
    }

    for (int i = 0; i < count; i++) {
        printf("%d ", numbers[i]);
    }

    printf("\\n");

    free(numbers);
    numbers = NULL;

    return 0;
}`,

  followUps: [
    'What are the main features of C?',
    'How is a C program compiled?',
    'What is a pointer?',
    'Are arrays and pointers the same?',
    'What is the difference between stack and heap memory?',
    'What is the difference between malloc and calloc?',
    'What is a dangling pointer?',
    'What causes a segmentation fault?',
    'What is a structure?',
    'What is the difference between C and C++?'
  ],

  cautions: [
    'Do not describe C as an object-oriented programming language.',

    'Do not say that arrays and pointers are exactly the same. They are related, but they are different language concepts.',

    'C always passes arguments by value. Passing a pointer still means that the pointer value itself is copied.',

    'malloc does not initialise the allocated memory.',

    'Do not dereference an uninitialised, null, dangling or otherwise invalid pointer.',

    'C does not provide automatic garbage collection or automatic array-bounds checking.',

    'Do not claim that the size of int or a pointer is identical on every system.'
  ],

  qa: [
    {
      question: '1. What is C?',
      answer:
        'C is a general-purpose, procedural, statically typed and compiled programming language. It provides efficient execution and direct memory access through pointers, which makes it useful for system-level and embedded software.'
    },

    {
      question: '2. Why is C called a procedural language?',
      answer:
        'C is called procedural because programs are mainly organised as a sequence of instructions and functions. The focus is on procedures that operate on data rather than on classes and objects.'
    },

    {
      question: '3. Why is C considered a middle-level language?',
      answer:
        'C combines high-level features such as functions, loops and structured programming with lower-level features such as pointers, bitwise operations and direct memory access. The term middle-level is informal, but it describes this combination.'
    },

    {
      question: '4. Is C a compiled or interpreted language?',
      answer:
        'C is normally compiled. The source code is converted into machine code before execution. The main stages are preprocessing, compilation, assembly and linking.'
    },

    {
      question: '5. What are the stages of compiling a C program?',
      answer:
        'The preprocessor first expands directives such as #include and #define. The compiler translates the C code, the assembler creates object code, and the linker combines object files and libraries into the final executable.'
    },

    {
      question: '6. What is a pointer?',
      answer:
        'A pointer is a variable that stores the memory address of another object or function. The address-of operator & obtains an address, while the dereference operator * accesses the value stored at a valid address.'
    },

    {
      question: '7. Why are pointers useful?',
      answer:
        'Pointers are useful for dynamic memory allocation, modifying caller-owned data, implementing linked structures, working efficiently with arrays and strings, and interacting with hardware or system APIs.'
    },

    {
      question: '8. What is a null pointer?',
      answer:
        'A null pointer represents that the pointer does not currently refer to a valid object. A pointer should be checked before dereferencing when null is a possible value.'
    },

    {
      question: '9. What is a wild pointer?',
      answer:
        'A wild pointer is an uninitialised pointer. Because it contains an unpredictable address, dereferencing it can cause undefined behaviour or a program crash.'
    },

    {
      question: '10. What is a dangling pointer?',
      answer:
        'A dangling pointer still stores the address of memory that is no longer valid. This can happen after memory is freed or after a local variable goes out of scope.'
    },

    {
      question: '11. How can you reduce dangling-pointer mistakes?',
      answer:
        'Release dynamically allocated memory only once, avoid returning the address of a local automatic variable, and set a pointer to NULL after freeing it when the pointer may otherwise be reused.'
    },

    {
      question: '12. Are arrays and pointers the same in C?',
      answer:
        'No. An array is a fixed collection of elements, while a pointer is a variable that stores an address. However, in many expressions an array name is converted into a pointer to its first element.'
    },

    {
      question: '13. How are strings represented in C?',
      answer:
        'A C string is normally represented as an array of char values ending with the null terminator \\0. Library functions such as strlen and strcmp depend on this terminator.'
    },

    {
      question: '14. Does C support pass by reference?',
      answer:
        'C passes every function argument by value. Reference-like behaviour is achieved by passing the address of an object through a pointer, allowing the function to modify the original object.'
    },

    {
      question: '15. What is the difference between stack and heap memory?',
      answer:
        'Stack storage is commonly used for automatic local variables and function-call information. It is managed automatically. Heap memory is requested dynamically using functions such as malloc and must be released using free.'
    },

    {
      question: '16. What does malloc do?',
      answer:
        'malloc allocates a requested number of bytes from dynamic storage and returns a pointer to the allocated block. The memory is not initialised, so its existing byte values are indeterminate.'
    },

    {
      question: '17. What is the difference between malloc and calloc?',
      answer:
        'malloc accepts the total number of bytes to allocate and leaves them uninitialised. calloc accepts an element count and element size and initialises the allocated bytes to zero.'
    },

    {
      question: '18. What does realloc do?',
      answer:
        'realloc changes the size of a previously allocated block. It may preserve the same address or move the data to a new location. If it fails, the original allocation remains valid.'
    },

    {
      question: '19. What is a memory leak?',
      answer:
        'A memory leak occurs when allocated memory is no longer needed or reachable but has not been released. Repeated leaks can increase memory usage throughout the lifetime of a program.'
    },

    {
      question: '20. What happens if free is called twice on the same pointer?',
      answer:
        'Freeing the same allocation twice produces undefined behaviour. A common defensive practice is to set the pointer to NULL after freeing it when the pointer remains in scope.'
    },

    {
      question: '21. What is a structure in C?',
      answer:
        'A structure is a user-defined type that groups related values, potentially of different data types, into one object. For example, a Student structure can contain a name, age and identifier.'
    },

    {
      question: '22. What is the difference between a structure and a union?',
      answer:
        'Each structure member has its own storage, so all members can hold values simultaneously. Union members share the same storage, so writing one member generally replaces the representation previously stored through another member.'
    },

    {
      question: '23. What is an enum?',
      answer:
        'An enum defines a set of named integer constants. It improves readability when a variable should represent one value from a fixed set, such as status values or menu choices.'
    },

    {
      question: '24. What does the static keyword mean in C?',
      answer:
        'Inside a function, a static variable retains its value between calls. At file scope, static gives a variable or function internal linkage, meaning it is available only within that source file.'
    },

    {
      question: '25. What does the extern keyword mean?',
      answer:
        'extern declares that a variable or function has a definition elsewhere. It is commonly used when multiple source files need to access the same external symbol.'
    },

    {
      question: '26. What is a header file?',
      answer:
        'A header file normally contains shared declarations, function prototypes, constants, macros and type definitions. Source files include the header so they agree on the same interfaces.'
    },

    {
      question: '27. What are header guards?',
      answer:
        'Header guards use preprocessor conditions to prevent a header from being processed more than once in the same translation unit. This avoids duplicate-definition and redeclaration problems.'
    },

    {
      question: '28. What is the difference between a macro and a function?',
      answer:
        'A macro performs text substitution before compilation and usually has no normal type checking. A function is compiled code with typed parameters, its arguments are evaluated according to normal language rules, and it is generally easier to debug.'
    },

    {
      question: '29. What is the sizeof operator?',
      answer:
        'sizeof returns the size in bytes of a type or object. Its result has type size_t. It is especially useful when allocating memory because type sizes can vary between systems.'
    },

    {
      question: '30. What is a segmentation fault?',
      answer:
        'A segmentation fault is an operating-system-level failure that commonly occurs when a program accesses invalid or protected memory, such as dereferencing an invalid pointer or writing outside valid storage.'
    },

    {
      question: '31. What is undefined behaviour?',
      answer:
        'Undefined behaviour means the C standard places no requirements on the result of an invalid operation. Examples include out-of-bounds array access, using a freed object and signed integer overflow.'
    },

    {
      question: '32. What are bitwise operators?',
      answer:
        'Bitwise operators work on the individual bits of integer values. C provides AND, OR, XOR, complement, left shift and right shift operators. They are commonly used for masks, flags and embedded programming.'
    },

    {
      question: '33. What is recursion?',
      answer:
        'Recursion occurs when a function calls itself directly or indirectly. A recursive solution needs a base case to stop further calls and a recursive step that moves toward that base case.'
    },

    {
      question: '34. What is the difference between declaration and definition?',
      answer:
        'A declaration tells the compiler that a name and type exist. A definition creates the entity or provides its implementation. A function prototype is a declaration, while the function body is its definition.'
    },

    {
      question: '35. What is the difference between C and C++?',
      answer:
        'C mainly supports procedural programming. C++ extends C-style programming with classes, objects, inheritance, polymorphism, templates, references, exception handling and the Standard Template Library.'
    },

    {
      question: '36. Why did you learn C when you mainly use C++?',
      answer:
        'C helped me understand procedural programming, pointers, arrays, memory allocation and how data structures are implemented internally. I mainly use C++ for DSA because the STL provides reusable containers and algorithms.'
    }
  ]
},
  {
  id: 'cpp',
  title: 'C++',
  category: 'languages',

  short:
    'A compiled, statically typed language that supports procedural, object-oriented and generic programming.',

  simple: [
    'C++ is a general-purpose, compiled and statically typed programming language.',

    'It was developed as an extension of C and adds features such as classes, objects, inheritance, polymorphism, templates and exception handling.',

    'C++ supports multiple programming styles, including procedural programming, object-oriented programming and generic programming.',

    'It is commonly used for data structures and algorithms, game development, operating systems, browsers, compilers, embedded systems and performance-sensitive software.',

    'C++ gives the programmer more control over memory than languages such as Java and Python.',

    'Memory can be managed manually using new and delete, although modern C++ generally prefers automatic objects, containers and smart pointers.',

    'The Standard Template Library provides reusable containers and algorithms such as vector, map, set, stack, queue, sort and binary_search.',

    'A class is a user-defined type that groups data and functions together.',

    'An object is an instance of a class.',

    'Encapsulation keeps related data and behaviour together and controls access through public, private and protected members.',

    'Inheritance allows a new class to reuse or extend the behaviour of an existing class.',

    'Polymorphism allows one interface to represent multiple implementations.',

    'Templates allow functions and classes to work with multiple data types.',

    'C++ supports both pointers and references. A pointer stores an address, while a reference acts as another name for an existing object.',

    'Learning C++ helps in understanding object-oriented design, memory management and efficient implementation of algorithms.'
  ],

  technical: [
    'C++ source code is normally compiled into native machine code before execution.',

    'C++ is statically typed, which means types are generally checked during compilation.',

    'C++ supports value semantics. Objects can be copied, moved, passed by value, passed by reference or accessed through pointers.',

    'A constructor initialises an object when it is created.',

    'A destructor runs when an object is destroyed and is commonly used to release resources.',

    'A default constructor can be called without arguments, while a parameterised constructor accepts values used during initialisation.',

    'A copy constructor creates a new object from an existing object of the same type.',

    'A move constructor transfers ownership of resources from a temporary or expiring object rather than performing an expensive deep copy.',

    'Function overloading allows several functions to share the same name when their parameter lists differ.',

    'Function overriding occurs when a derived class provides its own implementation of a virtual function inherited from a base class.',

    'Compile-time polymorphism includes function overloading, operator overloading and templates.',

    'Runtime polymorphism is commonly implemented using virtual functions and base-class pointers or references.',

    'A pure virtual function is declared using = 0 and makes the containing class abstract.',

    'An abstract class cannot normally be instantiated directly and is used to define a common interface for derived classes.',

    'A virtual destructor is required when objects may be deleted through a base-class pointer. It ensures that derived-class destructors also run.',

    'The this pointer refers to the current object inside a non-static member function.',

    'Static data members belong to the class rather than to individual objects.',

    'Static member functions do not have a this pointer and can directly access only static members.',

    'A friend function or class can access private and protected members, but friendship should be used carefully because it weakens encapsulation.',

    'Public inheritance usually represents an is-a relationship, while composition represents a has-a relationship.',

    'Composition is often preferred over inheritance when behaviour can be assembled without creating a strict type hierarchy.',

    'Multiple inheritance allows a class to inherit from more than one base class.',

    'The diamond problem occurs when a class inherits from two classes that share the same base class. Virtual inheritance can prevent duplicate base-class subobjects.',

    'The stack commonly stores automatic local variables and function-call information.',

    'The heap is used for dynamically allocated objects whose lifetime is controlled explicitly or through smart pointers.',

    'A pointer can be null and can be reassigned. A reference normally must be initialised immediately and cannot be reseated to refer to another object.',

    'A dangling pointer or reference refers to an object that no longer exists.',

    'A memory leak occurs when dynamically allocated memory is not released and its address is lost.',

    'RAII means Resource Acquisition Is Initialisation. A resource is owned by an object and released automatically in the object destructor.',

    'unique_ptr provides exclusive ownership of a dynamically allocated object.',

    'shared_ptr provides shared ownership using a reference count.',

    'weak_ptr observes an object managed by shared_ptr without increasing the ownership count and can help break reference cycles.',

    'The const keyword can protect variables, pointers, function parameters and member functions from unintended modification.',

    'A const member function promises not to modify the observable state of the object through that function.',

    'Templates support generic programming by allowing code to work with different types.',

    'The STL consists broadly of containers, iterators, algorithms and function objects.',

    'vector is a dynamic contiguous array with efficient random access and amortised constant-time insertion at the end.',

    'list is a doubly linked list that supports efficient insertion and deletion when an iterator to the position is available, but it does not provide constant-time random access.',

    'map stores ordered key-value pairs and is commonly implemented using a balanced tree.',

    'unordered_map stores key-value pairs using hashing and provides average constant-time lookup.',

    'set stores unique ordered values, while unordered_set stores unique hashed values.',

    'priority_queue is commonly implemented using a heap and provides access to the highest-priority element.',

    'Iterators provide a common way to traverse elements in STL containers.',

    'The auto keyword asks the compiler to infer a variable type from its initialiser.',

    'The namespace mechanism prevents naming conflicts. Standard-library components are placed inside the std namespace.',

    'Exception handling uses try, throw and catch. Exceptions should represent exceptional situations rather than ordinary control flow.',

    'Undefined behaviour can result from operations such as accessing an array outside its bounds, dereferencing invalid pointers or using an object after its lifetime ends.'
  ],

  interview:
    'C++ is a compiled, statically typed and general-purpose programming language that supports procedural, object-oriented and generic programming. I primarily use C++ for data structures and algorithms because the Standard Template Library provides efficient containers and algorithms such as vectors, maps, queues and priority queues. C++ also helps me understand references, pointers, object lifetimes and memory management in greater depth.',

  keyPoints: [
    'Classes and objects',
    'Constructors',
    'Destructors',
    'Inheritance',
    'Polymorphism',
    'Virtual functions',
    'Templates',
    'STL',
    'Pointers',
    'References',
    'Smart pointers',
    'RAII',
    'Copy semantics',
    'Move semantics',
    'Exception handling'
  ],

  code: `#include <iostream>
#include <memory>
#include <string>
#include <vector>
#include <algorithm>

class Person {
protected:
    std::string name;

public:
    explicit Person(std::string personName)
        : name(std::move(personName)) {}

    virtual void introduce() const {
        std::cout << "I am " << name << "\\n";
    }

    virtual ~Person() = default;
};

class Student : public Person {
private:
    int marks;

public:
    Student(std::string studentName, int studentMarks)
        : Person(std::move(studentName)), marks(studentMarks) {}

    void introduce() const override {
        std::cout << "I am " << name
                  << " and my marks are " << marks << "\\n";
    }
};

int main() {
    std::vector<int> numbers = {40, 10, 30, 20};

    std::sort(numbers.begin(), numbers.end());

    for (const int number : numbers) {
        std::cout << number << " ";
    }

    std::cout << "\\n";

    std::unique_ptr<Person> person =
        std::make_unique<Student>("Devanshi", 95);

    person->introduce();

    return 0;
}`,

  followUps: [
    'Why do you prefer C++ for DSA?',
    'What are the four pillars of OOP?',
    'What is the difference between overloading and overriding?',
    'Why do we need a virtual destructor?',
    'What is the difference between a pointer and a reference?',
    'What are smart pointers?',
    'What is RAII?',
    'What is the difference between vector and array?',
    'What is the difference between map and unordered_map?',
    'What is copy construction versus move construction?'
  ],

  cautions: [
    'Do not say that C++ is only an object-oriented language. It supports multiple programming paradigms.',

    'Do not say that vector insertion is always O(1). Insertion at the end is amortised O(1), but reallocation can occur.',

    'Do not say that unordered_map is always O(1). Its average lookup is O(1), but the worst case can be O(n).',

    'Do not manually use new and delete when automatic objects, STL containers or smart pointers can manage ownership more safely.',

    'Do not delete a derived object through a base pointer unless the base class has a virtual destructor.',

    'Do not confuse function overloading with function overriding.',

    'Do not describe references as objects that store addresses in exactly the same way as pointers. Their language behaviour is different.'
  ],

  qa: [
    {
      question: '1. What is C++?',
      answer:
        'C++ is a compiled, statically typed and general-purpose programming language. It supports procedural, object-oriented and generic programming and is widely used where performance and control over resources are important.'
    },

    {
      question: '2. Why do you use C++ for DSA?',
      answer:
        'I use C++ for DSA because the STL provides efficient containers and algorithms such as vector, stack, queue, map, unordered_map, priority_queue and sort. It also allows me to analyse memory usage and implementation details more closely.'
    },

    {
      question: '3. What is the difference between C and C++?',
      answer:
        'C mainly supports procedural programming. C++ adds classes, objects, inheritance, polymorphism, templates, references, exception handling, function overloading and the Standard Template Library.'
    },

    {
      question: '4. What is a class?',
      answer:
        'A class is a user-defined type that groups data members and member functions together. It acts as a blueprint from which objects can be created.'
    },

    {
      question: '5. What is an object?',
      answer:
        'An object is an instance of a class. It has its own state represented by data members and can perform behaviour through member functions.'
    },

    {
      question: '6. What is encapsulation?',
      answer:
        'Encapsulation means combining data and behaviour inside a class and controlling access to the internal state using access modifiers such as private, protected and public.'
    },

    {
      question: '7. What is abstraction?',
      answer:
        'Abstraction means exposing the essential interface of an object while hiding unnecessary implementation details. Abstract classes and well-designed public methods can support abstraction.'
    },

    {
      question: '8. What is inheritance?',
      answer:
        'Inheritance allows a derived class to reuse and extend the members of a base class. Public inheritance is commonly used to represent an is-a relationship.'
    },

    {
      question: '9. What is polymorphism?',
      answer:
        'Polymorphism allows the same interface to produce different behaviour depending on the object or types involved. C++ supports compile-time polymorphism through overloading and templates and runtime polymorphism through virtual functions.'
    },

    {
      question: '10. What is the difference between overloading and overriding?',
      answer:
        'Overloading means using the same function name with different parameter lists, usually within the same scope. Overriding occurs when a derived class replaces the implementation of a virtual function inherited from a base class.'
    },

    {
      question: '11. What is a virtual function?',
      answer:
        'A virtual function is a member function that supports runtime dispatch. When called through a base-class pointer or reference, the implementation belonging to the actual object type can run.'
    },

    {
      question: '12. What is a pure virtual function?',
      answer:
        'A pure virtual function is declared with = 0. It defines an interface that derived classes are expected to implement and makes the containing class abstract.'
    },

    {
      question: '13. What is an abstract class?',
      answer:
        'An abstract class contains at least one pure virtual function and cannot normally be instantiated directly. It is used as a common base interface for derived classes.'
    },

    {
      question: '14. Why is a virtual destructor important?',
      answer:
        'When a derived object is deleted through a base-class pointer, the base destructor must be virtual so that the derived destructor also runs. Otherwise, derived resources may not be released correctly.'
    },

    {
      question: '15. What is a constructor?',
      answer:
        'A constructor is a special member function that runs when an object is created. It establishes the initial state of the object.'
    },

    {
      question: '16. What is a destructor?',
      answer:
        'A destructor is a special member function that runs when an object is destroyed. It is used to release resources owned by the object.'
    },

    {
      question: '17. What is a copy constructor?',
      answer:
        'A copy constructor creates a new object from an existing object of the same type. Its common form accepts a const reference to the source object.'
    },

    {
      question: '18. What is shallow copy versus deep copy?',
      answer:
        'A shallow copy copies member values directly, including pointer addresses. A deep copy creates independent copies of dynamically owned resources so the objects do not unintentionally share the same allocation.'
    },

    {
      question: '19. What is move semantics?',
      answer:
        'Move semantics allow resources to be transferred from a temporary or expiring object instead of being copied. This can reduce expensive allocations and copying.'
    },

    {
      question: '20. What is the this pointer?',
      answer:
        'The this pointer points to the current object inside a non-static member function. It can be used to access members or distinguish member names from parameter names.'
    },

    {
      question: '21. What is the difference between a pointer and a reference?',
      answer:
        'A pointer stores an address, can be null and can be reassigned. A reference is an alias for an existing object, normally must be initialised immediately and cannot later be reseated to another object.'
    },

    {
      question: '22. What is a dangling pointer?',
      answer:
        'A dangling pointer points to an object whose lifetime has ended, such as dynamically allocated memory that was deleted or a local object that went out of scope.'
    },

    {
      question: '23. What is RAII?',
      answer:
        'RAII means Resource Acquisition Is Initialisation. A resource is acquired and owned by an object, and the object destructor releases that resource automatically when its lifetime ends.'
    },

    {
      question: '24. What is unique_ptr?',
      answer:
        'unique_ptr is a smart pointer that provides exclusive ownership of an object. It cannot be copied, but ownership can be transferred using move semantics.'
    },

    {
      question: '25. What is shared_ptr?',
      answer:
        'shared_ptr allows multiple smart pointers to share ownership of an object. The object is destroyed when the final owning shared_ptr is removed.'
    },

    {
      question: '26. What is weak_ptr?',
      answer:
        'weak_ptr observes an object managed by shared_ptr without increasing the ownership count. It is useful for avoiding circular shared ownership.'
    },

    {
      question: '27. What is the STL?',
      answer:
        'The Standard Template Library provides generic containers, algorithms, iterators and function objects. Examples include vector, map, set, queue, sort and find.'
    },

    {
      question: '28. What is the difference between vector and array?',
      answer:
        'A built-in array has a fixed size and limited built-in functionality. A vector is a dynamic contiguous container that can grow, tracks its own size and integrates with STL algorithms.'
    },

    {
      question: '29. What is the difference between vector and list?',
      answer:
        'Vector stores elements contiguously and supports constant-time random access. List stores nodes separately and supports efficient insertion and deletion through valid iterators, but it does not provide constant-time indexed access.'
    },

    {
      question: '30. What is the difference between map and unordered_map?',
      answer:
        'map stores keys in sorted order and commonly provides O(log n) operations. unordered_map uses hashing, does not maintain sorted order and provides average O(1) lookup, with a possible O(n) worst case.'
    },

    {
      question: '31. What is the difference between set and unordered_set?',
      answer:
        'set stores unique values in sorted order with commonly O(log n) operations. unordered_set stores unique values using hashing and provides average O(1) lookup without sorted order.'
    },

    {
      question: '32. What is a template?',
      answer:
        'A template allows a function or class to be written generically for multiple types. The compiler generates the required type-specific versions when the template is used.'
    },

    {
      question: '33. What is exception handling?',
      answer:
        'Exception handling separates error reporting from normal logic using try, throw and catch. It is intended for exceptional conditions that cannot be handled normally at the point of detection.'
    },

    {
      question: '34. What is the difference between stack and heap memory?',
      answer:
        'The stack commonly stores automatic local objects and function-call data, and its lifetime is managed automatically. Heap objects are dynamically allocated and must be managed using ownership objects or explicit allocation and release.'
    },

    {
      question: '35. What is the diamond problem?',
      answer:
        'The diamond problem occurs when a derived class inherits through two paths from the same base class, potentially creating duplicate base subobjects. Virtual inheritance can ensure that only one shared base subobject exists.'
    },

    {
      question: '36. What is composition versus inheritance?',
      answer:
        'Inheritance models an is-a relationship, while composition models a has-a relationship. Composition is often more flexible because behaviour can be changed without creating a tightly coupled class hierarchy.'
    }
  ]
},
  {
  id: 'python',
  title: 'Python',
  category: 'languages',

  short:
    'A high-level, dynamically typed language known for readable syntax, rapid development and a large ecosystem.',

  simple: [
    'Python is a high-level, general-purpose programming language known for readable and concise syntax.',

    'Python is dynamically typed, which means variable types are determined while the program runs rather than being declared explicitly in every statement.',

    'Python is commonly described as interpreted, although Python source code is generally compiled into bytecode before being executed by a Python virtual machine.',

    'Python supports procedural, object-oriented and functional programming styles.',

    'It is widely used for automation, scripting, data analysis, machine learning, backend development, testing and rapid prototyping.',

    'Python uses indentation to define blocks of code instead of braces.',

    'Variables in Python hold references to objects.',

    'Python provides built-in data structures such as lists, tuples, sets and dictionaries.',

    'Lists are ordered and mutable collections.',

    'Tuples are ordered and generally immutable collections.',

    'Sets store unique values and are useful for membership testing and removing duplicates.',

    'Dictionaries store key-value pairs and provide fast average lookup by key.',

    'Python automatically manages memory and uses garbage collection to reclaim many objects that are no longer required.',

    'Functions are first-class objects, meaning they can be stored in variables, passed as arguments and returned from other functions.',

    'Python has a large standard library and a large ecosystem of third-party packages.',

    'Python is useful when developer productivity and readability are more important than maximum low-level control.'
  ],

  technical: [
    'Python is dynamically typed, meaning a name can refer to objects of different types during its lifetime.',

    'Python is strongly typed because incompatible types are not generally converted automatically for arbitrary operations.',

    'Variables in Python are names bound to objects rather than fixed boxes that directly contain values.',

    'Everything in Python is represented as an object, including integers, functions and classes.',

    'Mutable objects can be changed after creation, while immutable objects cannot be changed in place.',

    'Lists, dictionaries and sets are mutable. Integers, strings, tuples and frozensets are immutable.',

    'A list is an ordered mutable sequence that allows duplicate elements.',

    'A tuple is an ordered sequence that is generally immutable and can be used as a dictionary key when all of its elements are hashable.',

    'A set is an unordered collection of unique hashable values.',

    'A dictionary maps unique hashable keys to values and preserves insertion order in modern Python versions.',

    'List comprehensions provide a concise way to create lists from iterable data.',

    'A generator produces values lazily rather than storing an entire result sequence in memory.',

    'The yield keyword pauses a generator function and preserves its execution state for the next iteration.',

    'An iterator is an object that provides values one at a time through the iterator protocol.',

    'An iterable is an object from which an iterator can be obtained, such as a list, string or dictionary.',

    'Function arguments are passed using object references. Python uses call by sharing, meaning a function receives a new local reference to the same object.',

    'Mutating a passed mutable object can affect the caller, while rebinding the local parameter does not change the caller’s variable binding.',

    'Default argument values are evaluated once when the function is defined, not each time it is called.',

    'Using a mutable object such as a list as a default parameter can unintentionally share state between calls.',

    'The *args syntax collects extra positional arguments into a tuple.',

    'The **kwargs syntax collects extra keyword arguments into a dictionary.',

    'A lambda expression creates a small anonymous function containing one expression.',

    'A closure is an inner function that remembers values from its enclosing scope even after the outer function has completed.',

    'A decorator wraps or modifies a function or class without directly changing its source implementation.',

    'A class defines data and behaviour, while an instance is an object created from that class.',

    'The self parameter refers to the current instance inside an instance method.',

    'The __init__ method initialises a newly created instance after object creation.',

    'Instance methods receive self, class methods receive cls and static methods receive no automatic instance or class reference.',

    'Python supports inheritance and method overriding.',

    'Python uses duck typing, which focuses on whether an object supports the required behaviour rather than requiring a specific declared type.',

    'Method resolution order defines the order in which Python searches base classes for attributes and methods.',

    'Exceptions are handled using try, except, else and finally.',

    'The finally block normally runs whether or not an exception occurs and is useful for cleanup.',

    'Context managers manage setup and cleanup around a block of code and are commonly used through the with statement.',

    'Modules are individual Python files, while packages organise related modules into directories.',

    'pip is commonly used to install Python packages.',

    'A virtual environment creates an isolated set of Python packages for a project.',

    'Python uses reference counting in its common CPython implementation and also includes cyclic garbage collection.',

    'The Global Interpreter Lock in CPython allows only one thread to execute Python bytecode at a time within one interpreter process.',

    'The GIL does not prevent threads from being useful for many I/O-bound tasks because threads can wait while network or file operations complete.',

    'Multiprocessing uses separate processes and can achieve parallel execution for CPU-bound work.',

    'async and await support cooperative asynchronous programming, especially for many concurrent I/O operations.',

    'Shallow copying creates a new outer container while nested objects may remain shared.',

    'Deep copying recursively creates copies of nested objects where possible.',

    'Type hints allow developers and tools to describe expected types, but Python generally does not enforce those hints automatically at runtime.',

    'The if __name__ == "__main__" block allows code to run only when the file is executed directly rather than imported as a module.'
  ],

  interview:
    'Python is a high-level, dynamically typed and general-purpose programming language known for readable syntax and rapid development. I have used it for programming fundamentals and data-related coursework. Its built-in data structures and large ecosystem make it useful for scripting, automation, data analysis, machine learning and quick implementation of ideas. Compared with C++, Python provides less low-level control but usually allows development with less code.',

  keyPoints: [
    'Dynamic typing',
    'Strong typing',
    'Lists',
    'Tuples',
    'Sets',
    'Dictionaries',
    'Functions',
    'Comprehensions',
    'Generators',
    'Decorators',
    'OOP',
    'Exceptions',
    'Modules',
    'Virtual environments',
    'Garbage collection',
    'GIL',
    'Async programming'
  ],

  code: `from dataclasses import dataclass
from typing import Iterable

@dataclass
class Student:
    name: str
    marks: list[int]

    def average(self) -> float:
        if not self.marks:
            return 0.0

        return sum(self.marks) / len(self.marks)


def passing_students(
    students: Iterable[Student],
    minimum_average: float = 40.0
) -> list[Student]:
    return [
        student
        for student in students
        if student.average() >= minimum_average
    ]


def generate_squares(limit: int):
    for number in range(limit):
        yield number * number


def main() -> None:
    students = [
        Student("Devanshi", [90, 95, 92]),
        Student("Aarav", [35, 42, 38]),
        Student("Mira", [78, 81, 84]),
    ]

    selected = passing_students(students, minimum_average=60)

    for student in selected:
        print(f"{student.name}: {student.average():.2f}")

    print(list(generate_squares(5)))


if __name__ == "__main__":
    main()`,

  followUps: [
    'Is Python compiled or interpreted?',
    'What is dynamic typing?',
    'What is the difference between list and tuple?',
    'What is the difference between set and dictionary?',
    'What are mutable and immutable objects?',
    'What is a generator?',
    'What is a decorator?',
    'How does Python pass arguments?',
    'What is the GIL?',
    'What is the difference between shallow and deep copy?'
  ],

  cautions: [
    'Do not say Python is purely interpreted. Python implementations commonly compile source into bytecode before execution.',

    'Do not say Python is weakly typed. It is dynamically typed but strongly typed.',

    'Do not use mutable objects such as [] or {} as default parameter values unless shared state is intentional.',

    'Do not say tuples are always completely immutable. A tuple cannot replace its elements, but it can contain mutable objects.',

    'Do not say sets preserve a meaningful sorted order.',

    'Do not say type hints are automatically enforced by the Python runtime.',

    'The GIL is mainly associated with CPython implementation details and should not be described as a universal rule for every Python implementation.'
  ],

  qa: [
    {
      question: '1. What is Python?',
      answer:
        'Python is a high-level, dynamically typed and general-purpose programming language. It is known for readable syntax, rapid development and a large ecosystem for web development, automation, data analysis and machine learning.'
    },

    {
      question: '2. Is Python compiled or interpreted?',
      answer:
        'Python is commonly described as interpreted, but in implementations such as CPython, source code is first compiled into bytecode and then executed by the Python virtual machine.'
    },

    {
      question: '3. What is dynamic typing?',
      answer:
        'Dynamic typing means variable types are determined at runtime. A name can refer to an integer at one point and later refer to a string or another object.'
    },

    {
      question: '4. Is Python strongly typed?',
      answer:
        'Yes. Python is dynamically typed but strongly typed. It generally does not perform arbitrary implicit conversions between incompatible types.'
    },

    {
      question: '5. What is the difference between a list and a tuple?',
      answer:
        'A list is mutable, while a tuple is generally immutable. Both are ordered and allow duplicates. Tuples can be used as dictionary keys when all contained values are hashable.'
    },

    {
      question: '6. What is the difference between a set and a dictionary?',
      answer:
        'A set stores unique values, while a dictionary stores key-value pairs. Both use hashing internally for average fast membership or key lookup.'
    },

    {
      question: '7. What are mutable and immutable objects?',
      answer:
        'Mutable objects can be changed after creation, while immutable objects cannot be modified in place. Lists, dictionaries and sets are mutable, while integers, strings and tuples are generally immutable.'
    },

    {
      question: '8. How are arguments passed in Python?',
      answer:
        'Python passes object references by assignment, sometimes called call by sharing. The function receives a local reference to the same object. Mutating a shared mutable object can affect the caller, but rebinding the local name does not.'
    },

    {
      question: '9. What are *args and **kwargs?',
      answer:
        '*args collects additional positional arguments into a tuple. **kwargs collects additional keyword arguments into a dictionary.'
    },

    {
      question: '10. What is a list comprehension?',
      answer:
        'A list comprehension is a concise syntax for creating a list from an iterable, optionally transforming values and filtering elements.'
    },

    {
      question: '11. What is an iterator?',
      answer:
        'An iterator is an object that returns one value at a time and remembers its current position. It follows the iterator protocol using methods such as __iter__ and __next__.'
    },

    {
      question: '12. What is an iterable?',
      answer:
        'An iterable is an object that can produce an iterator. Lists, strings, tuples, sets and dictionaries are common iterable objects.'
    },

    {
      question: '13. What is a generator?',
      answer:
        'A generator is an iterator that produces values lazily. Generator functions use yield to return one value at a time while preserving their execution state.'
    },

    {
      question: '14. Why use a generator instead of a list?',
      answer:
        'A generator can process large or potentially infinite sequences without storing every result in memory at once. The trade-off is that generated values are normally consumed sequentially.'
    },

    {
      question: '15. What is a lambda function?',
      answer:
        'A lambda is a small anonymous function defined using a single expression. It is commonly used for short operations such as sorting keys.'
    },

    {
      question: '16. What is a closure?',
      answer:
        'A closure is an inner function that remembers variables from its enclosing function scope even after the outer function has completed.'
    },

    {
      question: '17. What is a decorator?',
      answer:
        'A decorator is a callable that wraps or transforms another function or class. It is commonly used for logging, authorisation, caching and validation.'
    },

    {
      question: '18. What is self in Python?',
      answer:
        'self refers to the current instance inside an instance method. It is used to access instance attributes and other instance methods.'
    },

    {
      question: '19. What is __init__?',
      answer:
        '__init__ is an initialiser method that runs after an instance has been created. It is commonly used to assign the initial state of the object.'
    },

    {
      question: '20. What is the difference between an instance method, class method and static method?',
      answer:
        'An instance method receives self and works with a specific object. A class method receives cls and works with the class. A static method receives neither automatically and behaves like a function placed inside the class namespace.'
    },

    {
      question: '21. What is duck typing?',
      answer:
        'Duck typing means code focuses on whether an object provides the required behaviour rather than requiring it to belong to a particular declared type.'
    },

    {
      question: '22. What is method overriding?',
      answer:
        'Method overriding occurs when a subclass defines a method with the same name as a method inherited from its base class, replacing or extending the inherited behaviour.'
    },

    {
      question: '23. What is MRO?',
      answer:
        'MRO means Method Resolution Order. It defines the order in which Python searches a class and its parent classes for methods and attributes, especially in multiple inheritance.'
    },

    {
      question: '24. How does exception handling work in Python?',
      answer:
        'Potentially failing code is placed inside a try block. Matching errors can be handled with except, code for the successful path can use else, and cleanup logic can be placed in finally.'
    },

    {
      question: '25. What is a context manager?',
      answer:
        'A context manager controls setup and cleanup around a block of code. It is commonly used through the with statement for files, locks and database resources.'
    },

    {
      question: '26. What is the difference between a module and a package?',
      answer:
        'A module is usually one Python file containing definitions and statements. A package organises multiple related modules inside a directory structure.'
    },

    {
      question: '27. What is a virtual environment?',
      answer:
        'A virtual environment provides an isolated Python interpreter environment and package set for a project, preventing dependency conflicts between projects.'
    },

    {
      question: '28. How does memory management work in Python?',
      answer:
        'Python manages memory automatically. CPython primarily uses reference counting and also includes a cyclic garbage collector to reclaim certain groups of objects that reference one another.'
    },

    {
      question: '29. What is the GIL?',
      answer:
        'The Global Interpreter Lock in CPython allows one thread at a time to execute Python bytecode within a process. Threads can still be useful for I/O-bound tasks, while multiprocessing is often used for CPU-bound parallel work.'
    },

    {
      question: '30. What is the difference between threading and multiprocessing?',
      answer:
        'Threads share memory within one process and are often useful for I/O-bound work. Processes have separate memory spaces and can run Python code in parallel across multiple CPU cores.'
    },

    {
      question: '31. What are async and await?',
      answer:
        'async defines asynchronous functions, and await pauses one coroutine while another operation can proceed. They are useful for handling many concurrent I/O operations efficiently.'
    },

    {
      question: '32. What is shallow copy versus deep copy?',
      answer:
        'A shallow copy creates a new outer object but keeps references to nested objects. A deep copy recursively attempts to copy nested objects as well.'
    },

    {
      question: '33. Why are mutable default arguments dangerous?',
      answer:
        'Default argument objects are created once when the function is defined. A mutable default can therefore preserve changes between separate function calls unexpectedly.'
    },

    {
      question: '34. What are type hints?',
      answer:
        'Type hints describe expected parameter, return and variable types. They improve readability and static analysis, but Python does not normally enforce them automatically at runtime.'
    },

    {
      question: '35. What does if __name__ == "__main__" mean?',
      answer:
        'It checks whether a Python file is being executed directly. Code inside the block runs during direct execution but not when the file is imported as a module.'
    },

    {
      question: '36. Python versus C++?',
      answer:
        'Python generally offers shorter syntax, automatic memory management and faster development. C++ provides greater control over memory and performance and is typically better suited to low-level or performance-sensitive applications.'
    }
  ]
},
  {
  id: 'java',
  title: 'Java',
  category: 'languages',

  short:
    'A statically typed, object-oriented language that compiles to bytecode and runs on the Java Virtual Machine.',

  simple: [
    'Java is a general-purpose, statically typed and object-oriented programming language.',

    'Java source code is compiled into bytecode, which is executed by the Java Virtual Machine.',

    'The JVM allows the same compiled Java bytecode to run on different operating systems that provide a compatible JVM.',

    'This supports the idea of write once, run anywhere.',

    'Java is commonly used for backend systems, enterprise software, Android applications, banking systems and large-scale services.',

    'Java organises programs using classes and objects.',

    'A class describes the data and behaviour of a type, while an object is an instance of that class.',

    'Java supports encapsulation, abstraction, inheritance and polymorphism.',

    'Java uses automatic garbage collection to reclaim many objects that are no longer reachable.',

    'Java does not provide normal pointer arithmetic like C or C++.',

    'Java supports exception handling using try, catch, finally, throw and throws.',

    'Java provides collections such as ArrayList, HashMap, HashSet, Queue and Stack-like structures.',

    'Interfaces are used to define capabilities that multiple classes can implement.',

    'Java supports multithreading and concurrent programming.',

    'Java is more explicit than Python but usually provides safer automatic memory management than manual C or C++ allocation.'
  ],

  technical: [
    'Java source files normally use the .java extension and are compiled by javac into .class bytecode files.',

    'The JVM loads, verifies and executes Java bytecode.',

    'The JVM may interpret bytecode initially and use Just-In-Time compilation to convert frequently executed code into native machine code.',

    'The JDK contains the compiler, development tools, runtime components and standard libraries needed to develop Java applications.',

    'The JRE traditionally refers to the runtime components needed to run Java applications, including the JVM and runtime libraries.',

    'The JVM is the virtual execution environment responsible for running Java bytecode.',

    'Java is statically typed, so variable and method types are checked during compilation.',

    'Primitive types include byte, short, int, long, float, double, char and boolean.',

    'Reference types include classes, arrays, interfaces, enums and records.',

    'Primitive variables normally store their values directly, while reference variables identify objects.',

    'Java is always pass-by-value. When an object is passed to a method, the value being copied is the object reference.',

    'Reassigning a parameter does not change the caller variable, but modifying the shared object through the copied reference may affect the caller-visible object.',

    'A constructor initialises an object when it is created using new.',

    'If no constructor is declared, the compiler may provide a default no-argument constructor.',

    'The this keyword refers to the current object.',

    'The super keyword refers to members of the immediate parent class and can call a parent constructor.',

    'Method overloading uses the same method name with different parameter lists.',

    'Method overriding occurs when a subclass provides a new implementation of an inherited method.',

    'Overloading is resolved at compile time, while overriding supports runtime polymorphism.',

    'A final variable cannot be reassigned after initialisation.',

    'A final method cannot be overridden.',

    'A final class cannot be extended.',

    'A static member belongs to the class rather than to a particular object.',

    'Static methods do not receive a this reference.',

    'An abstract class cannot be instantiated directly and can contain both abstract and implemented methods.',

    'An interface defines a contract that implementing classes agree to provide.',

    'A class can extend one class but implement multiple interfaces.',

    'Interfaces can contain abstract methods, default methods, static methods and constants.',

    'Encapsulation is commonly achieved using private fields and controlled public methods.',

    'Inheritance represents an is-a relationship, while composition represents a has-a relationship.',

    'Composition is often preferred when code reuse does not require strict substitutability.',

    'Java String objects are immutable. Operations that appear to change a String create or return another String.',

    'StringBuilder is mutable and is preferred when a sequence of string modifications is required.',

    'The equals method compares logical equality when it is correctly overridden.',

    'The == operator compares primitive values or reference identity, depending on the operands.',

    'Objects that are equal according to equals should produce the same hashCode value.',

    'ArrayList is backed by a resizable array and provides fast indexed access.',

    'LinkedList is node-based and implements both List and Deque, but it does not provide efficient indexed access.',

    'HashMap stores key-value pairs using hashing and provides average constant-time lookup when hashing behaves well.',

    'TreeMap keeps keys ordered and commonly provides logarithmic operations.',

    'HashSet stores unique elements and is commonly backed internally by a HashMap.',

    'Comparable defines the natural ordering of a class through compareTo.',

    'Comparator defines an external or alternative ordering through compare.',

    'Checked exceptions must normally be caught or declared using throws.',

    'Unchecked exceptions extend RuntimeException and are not subject to the same compile-time handling requirement.',

    'The finally block is normally used for cleanup logic that should run whether or not an exception occurs.',

    'Try-with-resources automatically closes objects that implement AutoCloseable.',

    'Garbage collection reclaims unreachable managed objects, but it does not prevent logical memory leaks caused by retained references.',

    'The Java memory model includes areas such as thread stacks, the heap, method metadata and runtime-managed structures.',

    'Each thread has its own call stack, while objects are generally allocated in shared heap memory.',

    'A thread is a path of execution within a process.',

    'The synchronized keyword can restrict concurrent access to a critical section or object monitor.',

    'Race conditions occur when multiple threads access shared mutable data without correct coordination.',

    'Deadlock can occur when threads wait indefinitely for resources held by one another.',

    'Generics provide compile-time type safety for classes, interfaces and methods.',

    'Due to type erasure, much generic type information is removed during compilation.',

    'Packages organise related classes and help prevent naming conflicts.',

    'Access modifiers include private, default package access, protected and public.',

    'Java records provide a concise syntax for immutable-style data carriers.',

    'Enums represent a controlled set of named constant instances.',

    'Annotations attach metadata to code and can be processed by the compiler, runtime or development tools.'
  ],

  interview:
    'Java is a statically typed and object-oriented programming language. Java source code is compiled into bytecode that runs on the JVM, which provides platform independence. I have used Java while studying object-oriented programming and application-development concepts. I understand classes, interfaces, inheritance, polymorphism, collections, exception handling and automatic memory management. My main project experience is currently stronger in Kotlin, TypeScript and JavaScript, so I present Java as an academic and programming-fundamentals skill.',

  keyPoints: [
    'JVM',
    'JDK and JRE',
    'Bytecode',
    'Classes and objects',
    'Interfaces',
    'Inheritance',
    'Polymorphism',
    'Collections',
    'Generics',
    'Exceptions',
    'Strings',
    'Garbage collection',
    'Multithreading',
    'Access modifiers'
  ],

  code: `import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

interface Printable {
    void printDetails();
}

class Student implements Printable {
    private final String name;
    private final List<Integer> marks;

    public Student(String name, List<Integer> marks) {
        this.name = name;
        this.marks = new ArrayList<>(marks);
    }

    public String getName() {
        return name;
    }

    public double calculateAverage() {
        if (marks.isEmpty()) {
            return 0.0;
        }

        int total = 0;

        for (int mark : marks) {
            total += mark;
        }

        return (double) total / marks.size();
    }

    @Override
    public void printDetails() {
        System.out.println(
            name + ": " + calculateAverage()
        );
    }
}

public class Main {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        students.add(
            new Student("Devanshi", List.of(90, 95, 92))
        );

        students.add(
            new Student("Mira", List.of(78, 81, 84))
        );

        students.sort(
            Comparator.comparingDouble(Student::calculateAverage)
                      .reversed()
        );

        for (Student student : students) {
            student.printDetails();
        }
    }
}`,

  followUps: [
    'What is the difference between JVM, JRE and JDK?',
    'Why is Java platform-independent?',
    'Is Java completely object-oriented?',
    'What is the difference between == and equals?',
    'What is overloading versus overriding?',
    'What is an interface?',
    'What is an abstract class?',
    'What is the difference between ArrayList and LinkedList?',
    'What is the difference between HashMap and TreeMap?',
    'How does garbage collection work?'
  ],

  cautions: [
    'Do not claim that Java is used in one of your listed projects unless that is accurate.',

    'Describe Java as academic and programming-fundamentals experience if you have not used it in a major project.',

    'Do not say Java is pass-by-reference. Java is always pass-by-value.',

    'Do not use == for logical String comparison. Use equals when comparing String content.',

    'Garbage collection does not guarantee that a program cannot have memory leaks.',

    'Do not say HashMap is always O(1). Average lookup is commonly O(1), but performance depends on hashing and collisions.',

    'Do not say an interface and an abstract class are identical.'
  ],

  qa: [
    {
      question: '1. What is Java?',
      answer:
        'Java is a statically typed, object-oriented and general-purpose language. It compiles source code into bytecode that runs on the Java Virtual Machine.'
    },

    {
      question: '2. Why is Java platform-independent?',
      answer:
        'Java source code is compiled into platform-neutral bytecode. A compatible JVM on each operating system executes that same bytecode.'
    },

    {
      question: '3. What is the JVM?',
      answer:
        'The JVM is the execution environment that loads, verifies and runs Java bytecode. It also manages memory, garbage collection and runtime services.'
    },

    {
      question: '4. What is the JDK?',
      answer:
        'The JDK is the Java Development Kit. It contains development tools such as javac, runtime components and libraries required to build Java applications.'
    },

    {
      question: '5. What is the JRE?',
      answer:
        'The JRE traditionally refers to the environment required to run Java programs. It includes the JVM and runtime libraries but not the complete set of development tools.'
    },

    {
      question: '6. What is bytecode?',
      answer:
        'Bytecode is the intermediate instruction format produced by the Java compiler. It is stored in class files and executed by the JVM.'
    },

    {
      question: '7. What is JIT compilation?',
      answer:
        'Just-In-Time compilation converts frequently executed bytecode into native machine code during program execution to improve performance.'
    },

    {
      question: '8. Is Java completely object-oriented?',
      answer:
        'Not completely, because Java includes primitive types such as int, char and boolean that are not ordinary objects.'
    },

    {
      question: '9. What is a class?',
      answer:
        'A class is a user-defined blueprint describing fields, constructors and methods. Objects are created as instances of that class.'
    },

    {
      question: '10. What is an object?',
      answer:
        'An object is an instance of a class with its own state and access to the behaviour defined by that class.'
    },

    {
      question: '11. What is encapsulation?',
      answer:
        'Encapsulation combines data and methods within a class and restricts direct access to internal state, commonly using private fields and controlled public methods.'
    },

    {
      question: '12. What is abstraction?',
      answer:
        'Abstraction exposes essential behaviour while hiding implementation details. Interfaces and abstract classes are commonly used to create abstractions.'
    },

    {
      question: '13. What is inheritance?',
      answer:
        'Inheritance allows a child class to reuse and extend accessible behaviour from a parent class. Java supports single class inheritance.'
    },

    {
      question: '14. What is polymorphism?',
      answer:
        'Polymorphism allows a common type to refer to objects with different implementations. Overriding provides runtime polymorphism, while overloading is resolved at compile time.'
    },

    {
      question: '15. What is method overloading?',
      answer:
        'Method overloading means declaring multiple methods with the same name but different parameter lists.'
    },

    {
      question: '16. What is method overriding?',
      answer:
        'Method overriding occurs when a subclass provides a new implementation of an inherited method with a compatible signature.'
    },

    {
      question: '17. What is an interface?',
      answer:
        'An interface defines a contract that implementing classes must follow. It supports abstraction and allows a class to implement multiple capabilities.'
    },

    {
      question: '18. What is an abstract class?',
      answer:
        'An abstract class cannot be instantiated directly. It can contain abstract methods, implemented methods, fields and constructors.'
    },

    {
      question: '19. Interface versus abstract class?',
      answer:
        'An interface mainly defines a capability or contract and supports multiple implementation. An abstract class can provide shared state, constructors and partial implementation within one inheritance hierarchy.'
    },

    {
      question: '20. Does Java support multiple inheritance?',
      answer:
        'Java does not support extending multiple classes. A class can, however, implement multiple interfaces.'
    },

    {
      question: '21. What does static mean?',
      answer:
        'A static member belongs to the class rather than to each object. Static methods can be called without creating an instance.'
    },

    {
      question: '22. What does final mean?',
      answer:
        'A final variable cannot be reassigned, a final method cannot be overridden and a final class cannot be extended.'
    },

    {
      question: '23. What is the difference between == and equals?',
      answer:
        'For objects, == compares whether two references identify the same object. equals is intended to compare logical equality when correctly implemented.'
    },

    {
      question: '24. Why are Strings immutable?',
      answer:
        'String immutability improves safety, sharing, hashing and thread-related reasoning. Operations that appear to modify a String return a new String.'
    },

    {
      question: '25. String versus StringBuilder?',
      answer:
        'String is immutable. StringBuilder is mutable and is more suitable when repeatedly appending or changing text.'
    },

    {
      question: '26. Is Java pass-by-value or pass-by-reference?',
      answer:
        'Java is always pass-by-value. For objects, the copied value is a reference to the same object.'
    },

    {
      question: '27. What is the Java Collections Framework?',
      answer:
        'It is a set of interfaces and implementations for storing and processing groups of objects, including List, Set, Queue and Map-related types.'
    },

    {
      question: '28. Array versus ArrayList?',
      answer:
        'An array has a fixed length. ArrayList resizes dynamically and provides collection methods, but it stores objects rather than primitive values directly.'
    },

    {
      question: '29. ArrayList versus LinkedList?',
      answer:
        'ArrayList provides efficient indexed access using a dynamic array. LinkedList stores separate nodes and supports List and Deque operations but has slower indexed access.'
    },

    {
      question: '30. HashMap versus TreeMap?',
      answer:
        'HashMap uses hashing and does not maintain sorted key order. TreeMap maintains sorted keys and commonly provides O(log n) operations.'
    },

    {
      question: '31. HashSet versus ArrayList?',
      answer:
        'HashSet stores unique elements and supports average fast membership checks. ArrayList preserves order and allows duplicates.'
    },

    {
      question: '32. Comparable versus Comparator?',
      answer:
        'Comparable defines a class natural ordering through compareTo. Comparator defines an external or alternative ordering through compare.'
    },

    {
      question: '33. What are generics?',
      answer:
        'Generics allow classes and methods to work with specified types while providing compile-time type safety and reducing explicit casts.'
    },

    {
      question: '34. Checked versus unchecked exceptions?',
      answer:
        'Checked exceptions must normally be caught or declared. Unchecked exceptions extend RuntimeException and are not subject to that compile-time rule.'
    },

    {
      question: '35. What is try-with-resources?',
      answer:
        'Try-with-resources automatically closes resources that implement AutoCloseable when execution leaves the block.'
    },

    {
      question: '36. How does garbage collection work?',
      answer:
        'The JVM identifies managed objects that are no longer reachable and can reclaim their memory. The exact algorithm depends on the selected garbage collector.'
    },

    {
      question: '37. Can Java have memory leaks?',
      answer:
        'Yes. A program can retain references to objects it no longer needs, preventing the garbage collector from reclaiming them.'
    },

    {
      question: '38. What is a thread?',
      answer:
        'A thread is an independent path of execution inside a process. Multiple threads can share heap objects within the same Java process.'
    },

    {
      question: '39. What is synchronization?',
      answer:
        'Synchronization coordinates access to shared mutable data so that concurrent threads do not execute unsafe critical operations at the same time.'
    },

    {
      question: '40. Why did you include Java on your resume?',
      answer:
        'I studied Java for object-oriented programming and application-development concepts. I understand its class model, interfaces, collections, exceptions and JVM execution, although my primary project work is currently in Kotlin, TypeScript and JavaScript.'
    }
  ]
},
  {
  id: 'kotlin',
  title: 'Kotlin',
  category: 'languages',

  short:
    'A concise, statically typed and null-safe language widely used for modern Android development.',

  simple: [
    'Kotlin is a statically typed, general-purpose programming language developed by JetBrains.',

    'Kotlin is widely used for native Android application development.',

    'Kotlin code can run on the JVM and can work together with existing Java code.',

    'This compatibility allows Android projects to contain both Kotlin and Java classes.',

    'Kotlin generally requires less boilerplate code than Java.',

    'Kotlin provides built-in null-safety features that help prevent many null-reference errors.',

    'A non-nullable type such as String cannot normally store null.',

    'A nullable type such as String? can store either a String or null.',

    'val declares a read-only reference, while var declares a reference that can be reassigned.',

    'Type inference allows Kotlin to determine a variable type from its initial value.',

    'Data classes provide concise classes for storing structured data.',

    'Extension functions allow developers to add callable functionality to an existing type without modifying that type.',

    'Kotlin supports object-oriented and functional programming styles.',

    'Coroutines provide a structured way to perform asynchronous and concurrent work.',

    'In CareCompanion, Kotlin is the language responsible for Android application logic and screen interactions.'
  ],

  technical: [
    'Kotlin is statically typed, so types are generally checked during compilation.',

    'Kotlin/JVM code is compiled into JVM bytecode and can use Java libraries.',

    'Kotlin provides Java interoperability, allowing Kotlin to call Java code and Java to call appropriately exposed Kotlin code.',

    'val prevents a reference from being reassigned, but it does not automatically make the referenced object deeply immutable.',

    'var allows the reference to be reassigned.',

    'A type without a question mark is non-nullable by default.',

    'A type followed by ? is nullable.',

    'The safe-call operator ?. accesses a member only when the receiver is not null.',

    'The Elvis operator ?: supplies an alternative value when the expression on its left is null.',

    'The not-null assertion operator !! converts a nullable value to a non-null expectation and throws an exception if the value is null.',

    'The !! operator should be used cautiously because it removes the benefit of compile-time null-safety.',

    'Safe casts use as? and return null when a cast is not possible.',

    'Smart casts allow the compiler to treat a checked value as a more specific type when it can prove that the value has not changed.',

    'The when expression provides a flexible alternative to switch statements and can return a value.',

    'The if statement is also an expression in Kotlin and can return a value.',

    'Functions are declared using the fun keyword.',

    'Function parameters are read-only inside the function.',

    'Default parameter values reduce the need for multiple overloaded methods.',

    'Named arguments improve readability when calling functions with several parameters.',

    'A primary constructor is declared as part of the class header.',

    'Secondary constructors are declared using the constructor keyword.',

    'The init block runs as part of object initialisation.',

    'Classes and methods are final by default in Kotlin.',

    'The open keyword is required when a class or method should support inheritance or overriding.',

    'The override keyword is mandatory when overriding an inherited member.',

    'An abstract class can contain abstract and implemented members.',

    'An interface defines a contract and can also provide method implementations.',

    'A data class automatically provides useful methods such as equals, hashCode, toString, component functions and copy.',

    'A data class should have at least one primary-constructor parameter marked val or var.',

    'A sealed class restricts which types can directly extend it, making it useful for representing a controlled set of states.',

    'An enum class represents a fixed set of named instances.',

    'An object declaration creates a singleton instance.',

    'A companion object stores class-associated members similar to certain Java static use cases.',

    'Extension functions are resolved statically and do not actually modify the original class.',

    'Higher-order functions accept functions as parameters or return functions.',

    'Lambda expressions provide concise function values.',

    'Collection operations such as map, filter, reduce, any and all support functional-style data processing.',

    'List usually represents a read-only collection interface, while MutableList supports modification through that reference.',

    'Read-only collection interfaces do not necessarily guarantee that the underlying collection can never change through another reference.',

    'Kotlin distinguishes between structural equality using == and referential equality using ===.',

    'The == operator safely calls equals for logical comparison.',

    'The === operator checks whether two references identify the same object.',

    'Kotlin exceptions are unchecked from the language perspective, so methods do not declare checked exceptions as Java does.',

    'The try expression can return a value.',

    'The use function helps close resources that implement Closeable or AutoCloseable.',

    'Coroutines are lightweight units of asynchronous work managed by coroutine libraries rather than one operating-system thread per coroutine.',

    'A suspend function can pause without blocking its underlying thread and resume later.',

    'Coroutine builders include launch and async in appropriate coroutine scopes.',

    'launch returns a Job and is used when a result value is not directly required.',

    'async returns a Deferred value whose result can be obtained using await.',

    'Coroutine scopes help control coroutine lifetimes and cancellation.',

    'Structured concurrency ties child coroutine lifetimes to a parent scope.',

    'Dispatchers determine the execution context used by a coroutine.',

    'Android applications commonly use lifecycle-aware scopes to avoid work continuing longer than the relevant screen or component.',

    'Kotlin properties can have custom getter and setter logic.',

    'The lateinit modifier delays initialisation of a non-null mutable property, but accessing it before initialisation causes an exception.',

    'The lazy delegate delays computation of a read-only value until it is first accessed.',

    'Delegated properties allow property behaviour to be provided by another object.',

    'Scope functions include let, run, with, apply and also, each with different receiver and return-value behaviour.',

    'Kotlin Android development still requires understanding Android components such as activities, fragments, intents, lifecycle callbacks and state management.',

    'Kotlin itself does not automatically provide navigation, persistence or networking. Those features depend on Android APIs and libraries used by the project.'
  ],

  interview:
    'Kotlin is a statically typed language widely used for modern Android development. I used Kotlin in CareCompanion to implement application logic and screen interactions for features such as schedules, medicine management, emergency contacts and wellness or SOS support. I chose Kotlin because it provides concise syntax, built-in null-safety and strong interoperability with Java and the Android ecosystem. I would describe only the Android components and coroutine features that are actually present in my project.',

  keyPoints: [
    'Null safety',
    'val and var',
    'Type inference',
    'Data classes',
    'Extension functions',
    'Sealed classes',
    'Collections',
    'Lambdas',
    'Higher-order functions',
    'Coroutines',
    'Java interoperability',
    'Android lifecycle',
    'Activities',
    'Fragments',
    'Intents'
  ],

  code: `data class Medicine(
    val name: String,
    val dosage: String,
    var completed: Boolean = false
)

fun formatMedicine(medicine: Medicine?): String {
    return medicine?.let {
        it.name + " - " + it.dosage
    } ?: "No medicine selected"
}

fun pendingMedicines(
    medicines: List<Medicine>
): List<Medicine> {
    return medicines.filter { medicine ->
        !medicine.completed
    }
}

fun main() {
    val medicines = mutableListOf(
        Medicine("Medicine A", "After breakfast"),
        Medicine("Medicine B", "Before sleeping")
    )

    medicines[0].completed = true

    val pending = pendingMedicines(medicines)

    pending.forEach { medicine ->
        println(formatMedicine(medicine))
    }
}`,

  followUps: [
    'Why did you use Kotlin for CareCompanion?',
    'What is null safety?',
    'What is the difference between val and var?',
    'What is a data class?',
    'What is an extension function?',
    'What is the difference between == and ===?',
    'What is a sealed class?',
    'What are coroutines?',
    'What is an activity?',
    'What is the Android activity lifecycle?'
  ],

  cautions: [
    'Only claim that CareCompanion uses activities, fragments, coroutines, Room or other Android components after checking the actual code.',

    'Do not say val makes an entire object immutable. It only prevents reassignment of that reference.',

    'Avoid using !! unless null is genuinely impossible and that guarantee is clear.',

    'Do not describe extension functions as modifying the original class.',

    'Do not say coroutines are the same as threads.',

    'Do not claim persistent medicine storage, reminders, API calls or cloud integration unless CareCompanion actually implements them.',

    'Kotlin null safety reduces null-related errors but cannot eliminate every possible runtime null issue, especially around Java interoperability and !!.'
  ],

  qa: [
    {
      question: '1. What is Kotlin?',
      answer:
        'Kotlin is a statically typed, general-purpose language developed by JetBrains. It is widely used for Android development and can compile to JVM bytecode.'
    },

    {
      question: '2. Why did you use Kotlin in CareCompanion?',
      answer:
        'I used Kotlin because it is well suited to modern Android development, offers concise syntax, provides built-in null safety and integrates with Android Studio and Java-based Android APIs.'
    },

    {
      question: '3. How does Kotlin work with Java?',
      answer:
        'Kotlin/JVM compiles to JVM bytecode and can call Java classes and libraries. Java can also call Kotlin code when its declarations are exposed compatibly.'
    },

    {
      question: '4. What is the difference between val and var?',
      answer:
        'val creates a read-only reference that cannot be reassigned. var creates a mutable reference that can be reassigned.'
    },

    {
      question: '5. Does val make an object immutable?',
      answer:
        'No. val prevents the reference from pointing to another object, but the object itself may still contain mutable properties or collections.'
    },

    {
      question: '6. What is type inference?',
      answer:
        'Type inference allows the compiler to determine a variable or expression type from its initial value or context.'
    },

    {
      question: '7. What is null safety?',
      answer:
        'Kotlin separates nullable and non-nullable types. A String cannot normally hold null, while String? can hold either a String or null.'
    },

    {
      question: '8. What is the safe-call operator?',
      answer:
        'The ?. operator accesses a property or function only when the receiver is not null. If it is null, the expression returns null.'
    },

    {
      question: '9. What is the Elvis operator?',
      answer:
        'The ?: operator provides a fallback value when the expression on its left evaluates to null.'
    },

    {
      question: '10. What does the !! operator do?',
      answer:
        'The !! operator asserts that a nullable value is not null. It throws a NullPointerException if the value is actually null.'
    },

    {
      question: '11. What is a smart cast?',
      answer:
        'After a reliable type or null check, the Kotlin compiler may automatically treat a value as the checked type without requiring an explicit cast.'
    },

    {
      question: '12. What is a data class?',
      answer:
        'A data class is designed to hold structured data. Kotlin automatically generates useful methods such as equals, hashCode, toString and copy.'
    },

    {
      question: '13. What does the copy function do in a data class?',
      answer:
        'It creates a new instance using the existing property values while allowing selected properties to be replaced.'
    },

    {
      question: '14. What is an extension function?',
      answer:
        'An extension function allows a function to be called using the syntax of an existing type without changing or inheriting from that type.'
    },

    {
      question: '15. Does an extension function modify the original class?',
      answer:
        'No. It is resolved as a statically declared function and does not add an actual member to the original class.'
    },

    {
      question: '16. What is a sealed class?',
      answer:
        'A sealed class restricts its direct subclasses to a controlled hierarchy. It is useful for representing states such as loading, success and error.'
    },

    {
      question: '17. What is an object declaration?',
      answer:
        'An object declaration creates a singleton instance that is initialised when first accessed according to its runtime context.'
    },

    {
      question: '18. What is a companion object?',
      answer:
        'A companion object stores members associated with a class rather than a specific instance and can provide factory functions or constants.'
    },

    {
      question: '19. Why are Kotlin classes final by default?',
      answer:
        'Final-by-default classes prevent accidental inheritance. A class or method must be marked open when extension or overriding is intended.'
    },

    {
      question: '20. What is the when expression?',
      answer:
        'when selects a branch based on values, types or conditions. It is more flexible than a traditional switch and can return a value.'
    },

    {
      question: '21. What is the difference between == and ===?',
      answer:
        '== checks structural equality using equals, while === checks whether two references identify the same object.'
    },

    {
      question: '22. What is a higher-order function?',
      answer:
        'A higher-order function accepts another function as a parameter or returns a function.'
    },

    {
      question: '23. What is a lambda?',
      answer:
        'A lambda is an anonymous function value that can be passed to higher-order functions such as map, filter or forEach.'
    },

    {
      question: '24. List versus MutableList?',
      answer:
        'List exposes read-only collection operations. MutableList also exposes methods for adding, removing and replacing elements.'
    },

    {
      question: '25. What are coroutines?',
      answer:
        'Coroutines are lightweight asynchronous tasks that can suspend and resume without requiring one dedicated operating-system thread for each task.'
    },

    {
      question: '26. What is a suspend function?',
      answer:
        'A suspend function can pause coroutine execution without blocking the underlying thread and can later resume with its state preserved.'
    },

    {
      question: '27. launch versus async?',
      answer:
        'launch starts a coroutine and returns a Job. async returns a Deferred result that can be obtained using await.'
    },

    {
      question: '28. Are coroutines the same as threads?',
      answer:
        'No. Coroutines are units of asynchronous work scheduled on execution contexts. Many coroutines can use a smaller number of threads.'
    },

    {
      question: '29. What is structured concurrency?',
      answer:
        'Structured concurrency organises coroutines inside scopes so their lifetime, cancellation and failures are connected to their parent operation.'
    },

    {
      question: '30. What is lateinit?',
      answer:
        'lateinit delays initialisation of a non-null mutable property. Accessing it before assigning a value causes an exception.'
    },

    {
      question: '31. What is lazy?',
      answer:
        'lazy computes and stores a read-only value the first time it is accessed.'
    },

    {
      question: '32. lateinit versus lazy?',
      answer:
        'lateinit is used with a mutable var that will be assigned later. lazy is used with a val whose value is calculated automatically on first access.'
    },

    {
      question: '33. What are Kotlin scope functions?',
      answer:
        'let, run, with, apply and also execute a block in the context of an object. They differ in how the object is referenced and what the function returns.'
    },

    {
      question: '34. What is an activity?',
      answer:
        'An activity is an Android component that commonly represents a user-facing screen or entry point and participates in a lifecycle managed by Android.'
    },

    {
      question: '35. What is a fragment?',
      answer:
        'A fragment is a reusable portion of user interface and behaviour hosted within an activity. It has its own lifecycle connected to its host.'
    },

    {
      question: '36. What is an intent?',
      answer:
        'An intent is an Android messaging object used to request an action, such as opening another activity or invoking a system feature.'
    },

    {
      question: '37. What is the activity lifecycle?',
      answer:
        'Important callbacks include onCreate, onStart, onResume, onPause, onStop and onDestroy. They represent transitions in the activity state.'
    },

    {
      question: '38. How did you use Kotlin in CareCompanion?',
      answer:
        'I used Kotlin to implement the Android application logic and screen interactions for healthcare-support features. I would explain the exact navigation and storage mechanisms after verifying the relevant project classes.'
    },

    {
      question: '39. Kotlin versus Java?',
      answer:
        'Both run well in the Android ecosystem. Kotlin is generally more concise and provides built-in nullable-type handling, data classes and coroutine support, while Java has a larger legacy codebase and ecosystem.'
    },

    {
      question: '40. What would you improve in CareCompanion?',
      answer:
        'Depending on the current implementation, possible improvements include persistent local storage, secure cloud synchronisation, validated medicine reminders, lifecycle-aware state handling and improved accessibility. I would only claim implemented features that are present in the code.'
    }
  ]
},
  {
  id: 'html',
  title: 'HTML',
  category: 'languages',

  short:
    'The markup language used to define the structure, meaning and content of webpages.',

  simple: [
    'HTML stands for HyperText Markup Language.',

    'HTML is a markup language, not a programming language, because it describes webpage structure rather than implementing general-purpose logic.',

    'HTML uses elements to represent content such as headings, paragraphs, links, images, buttons, forms and tables.',

    'Most HTML elements contain an opening tag, content and a closing tag.',

    'Attributes provide additional information about an element, such as an image source, link destination or input type.',

    'The browser reads HTML and converts it into a tree-like representation called the Document Object Model.',

    'CSS styles the HTML elements, while JavaScript adds dynamic behaviour and interaction.',

    'Semantic HTML uses elements that describe the meaning of content, such as header, nav, main, article, section and footer.',

    'Semantic elements improve readability, accessibility and search-engine understanding.',

    'Forms collect user input through controls such as input, textarea, select, checkbox, radio button and button.',

    'Labels should be connected to form controls so users and screen readers can understand each field.',

    'The alt attribute describes an image when the image cannot be seen or loaded.',

    'Block-level elements generally begin on a new line, while inline elements normally remain within surrounding text.',

    'HTML documents usually contain a doctype, an html root element, a head section and a body section.',

    'The head contains metadata and linked resources, while the body contains visible webpage content.',

    'HTML provides the foundation on which CSS, JavaScript, React and other frontend technologies operate.'
  ],

  technical: [
    'The <!DOCTYPE html> declaration tells the browser to use modern standards-mode rendering.',

    'The html element is the root element of an HTML document.',

    'The lang attribute identifies the primary language of a page and helps accessibility tools and search engines.',

    'The head element contains document metadata, title information, character encoding, viewport configuration, stylesheets and other resources.',

    'The meta charset="UTF-8" declaration allows the document to represent a wide range of characters.',

    'The viewport meta tag controls how a page is scaled and displayed on mobile devices.',

    'The body element contains the content presented to the user.',

    'The browser parses HTML and creates the DOM tree, which JavaScript can inspect and modify.',

    'HTML elements can contain attributes consisting of a name and an optional value.',

    'Global attributes such as id, class, title, hidden and data-* can be used on many HTML elements.',

    'The id attribute should uniquely identify one element within a document.',

    'The class attribute can be shared by multiple elements and is commonly used by CSS and JavaScript.',

    'Custom data-* attributes store application-specific data on HTML elements.',

    'Semantic elements communicate the role of content rather than only its appearance.',

    'The main element should represent the dominant content of the page and is normally used once per document.',

    'The article element represents self-contained content that could stand independently.',

    'The section element groups related content and normally has an associated heading.',

    'The nav element represents a major group of navigation links.',

    'The aside element represents supporting or indirectly related content.',

    'Heading elements range from h1 to h6 and should form a meaningful content hierarchy.',

    'Heading levels should describe document structure rather than being selected only for visual size.',

    'Anchor elements create hyperlinks using the href attribute.',

    'The target="_blank" attribute opens a link in another browsing context, and rel="noopener noreferrer" is commonly added for security and privacy.',

    'The img element is a replaced element and normally requires src and alt attributes.',

    'Responsive images can use srcset, sizes and the picture element.',

    'The alt attribute should describe meaningful images, while decorative images commonly use an empty alt value.',

    'The form element groups controls that collect and submit user input.',

    'The action attribute specifies where form data is submitted, while method commonly specifies GET or POST.',

    'A label can be connected to an input using the label for attribute and the input id attribute.',

    'The name attribute determines the key under which a form control value is submitted.',

    'The type attribute changes the behaviour and validation of an input, such as email, number, date, password or checkbox.',

    'Built-in form validation attributes include required, min, max, minlength, maxlength and pattern.',

    'Client-side validation improves user experience but must not replace backend validation.',

    'Buttons should normally specify type="button" unless they are intended to submit or reset a form.',

    'Inside a form, a button without an explicit type commonly behaves as a submit button.',

    'Tables should be used for tabular data rather than general page layout.',

    'Table-related elements include table, caption, thead, tbody, tr, th and td.',

    'The scope attribute on th can help assistive technologies understand row and column headings.',

    'Ordered lists use ol, unordered lists use ul and individual list items use li.',

    'The details and summary elements create a native expandable disclosure component.',

    'The audio and video elements provide native media playback capabilities.',

    'The canvas element provides a drawing surface controlled primarily through JavaScript.',

    'The iframe element embeds another browsing context and should be used carefully because of security, performance and accessibility concerns.',

    'ARIA attributes can supplement accessibility when native HTML does not provide the required semantics.',

    'Native semantic HTML should generally be preferred over recreating existing controls using generic div elements and ARIA.',

    'A valid HTML document improves predictable browser behaviour, maintainability and accessibility.'
  ],

  interview:
    'HTML is the markup language used to define the structure and meaning of webpage content. I use semantic elements such as header, nav, main, section and footer to keep pages readable and accessible. I also use appropriate form controls, labels and validation attributes so users can interact with the interface correctly. HTML provides structure, CSS controls presentation and JavaScript adds dynamic behaviour.',

  keyPoints: [
    'Document structure',
    'Elements and attributes',
    'Semantic HTML',
    'Forms',
    'Accessibility',
    'DOM',
    'Links and images',
    'Tables',
    'Metadata',
    'Responsive images',
    'Native validation'
  ],

  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>Healthcare Vitals Tracker</title>
</head>

<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#readings">Readings</a>
    </nav>
  </header>

  <main id="home">
    <section aria-labelledby="vitals-heading">
      <h1 id="vitals-heading">Record your vitals</h1>

      <form>
        <div>
          <label for="systolic">
            Systolic pressure
          </label>

          <input
            id="systolic"
            name="systolic"
            type="number"
            min="1"
            required
          />
        </div>

        <div>
          <label for="diastolic">
            Diastolic pressure
          </label>

          <input
            id="diastolic"
            name="diastolic"
            type="number"
            min="1"
            required
          />
        </div>

        <button type="submit">
          Save reading
        </button>
      </form>
    </section>

    <section
      id="readings"
      aria-labelledby="history-heading"
    >
      <h2 id="history-heading">Reading history</h2>

      <article>
        <h3>30 July 2026</h3>
        <p>Blood pressure: 120/80</p>
      </article>
    </section>
  </main>

  <footer>
    <p>Healthcare Vitals Tracker</p>
  </footer>
</body>
</html>`,

  followUps: [
    'Why is HTML not considered a programming language?',
    'What is semantic HTML?',
    'What is the DOM?',
    'What is the difference between id and class?',
    'What is the difference between div and section?',
    'Why are labels important in forms?',
    'What is the purpose of the alt attribute?',
    'What is the viewport meta tag?',
    'What are block and inline elements?',
    'What is the difference between GET and POST in forms?'
  ],

  cautions: [
    'Do not describe HTML as a programming language.',

    'Do not use div for every element when a suitable semantic element exists.',

    'Do not use headings only to achieve a particular font size.',

    'Do not omit labels from important form controls.',

    'Frontend form validation is not a substitute for backend validation.',

    'Do not use tables for general page layout.',

    'The alt attribute should describe the purpose of meaningful images rather than merely repeat the filename.'
  ],

  qa: [
    {
      question: '1. What is HTML?',
      answer:
        'HTML stands for HyperText Markup Language. It defines the structure and meaning of webpage content using elements and attributes.'
    },

    {
      question: '2. Why is HTML not a programming language?',
      answer:
        'HTML describes document structure and content. It does not independently provide general-purpose programming constructs such as variables, conditions, loops and functions.'
    },

    {
      question: '3. What is an HTML element?',
      answer:
        'An element is a structural part of an HTML document, such as a heading, paragraph, link, form control or section.'
    },

    {
      question: '4. What is an attribute?',
      answer:
        'An attribute provides additional information or configuration for an element, such as href for a link, src for an image or type for an input.'
    },

    {
      question: '5. What is semantic HTML?',
      answer:
        'Semantic HTML uses elements that describe their purpose, such as nav, main, article, section and footer, instead of relying only on generic containers.'
    },

    {
      question: '6. Why is semantic HTML important?',
      answer:
        'It improves code readability, accessibility and search-engine understanding by clearly communicating the role of each part of the page.'
    },

    {
      question: '7. What is the DOM?',
      answer:
        'The Document Object Model is the browser-created tree representation of an HTML document. JavaScript can read and modify this tree.'
    },

    {
      question: '8. What does <!DOCTYPE html> do?',
      answer:
        'It tells the browser to interpret the document using modern HTML standards mode.'
    },

    {
      question: '9. What is the purpose of the head element?',
      answer:
        'The head contains metadata and linked resources such as the title, character encoding, viewport configuration, stylesheets and scripts.'
    },

    {
      question: '10. What is the purpose of the body element?',
      answer:
        'The body contains the webpage content presented to users.'
    },

    {
      question: '11. What is the difference between id and class?',
      answer:
        'An id should uniquely identify one element in a document. A class can be shared across multiple elements for styling or behaviour.'
    },

    {
      question: '12. What are block and inline elements?',
      answer:
        'Block elements generally occupy available horizontal space and start on a new line. Inline elements normally remain within surrounding text content.'
    },

    {
      question: '13. What is the difference between div and section?',
      answer:
        'div is a generic container without semantic meaning. section groups related thematic content and should normally have a heading.'
    },

    {
      question: '14. What is the difference between section and article?',
      answer:
        'A section groups related content within a page. An article represents self-contained content that could stand independently or be reused.'
    },

    {
      question: '15. Why should heading levels be used carefully?',
      answer:
        'Headings create a document outline. A meaningful hierarchy helps users, assistive technologies and search engines understand content structure.'
    },

    {
      question: '16. What is the alt attribute?',
      answer:
        'The alt attribute provides a text alternative for an image. It helps users who cannot see the image and appears when the image cannot load.'
    },

    {
      question: '17. What should be used for decorative images?',
      answer:
        'A decorative image commonly uses an empty alt attribute, alt="", so assistive technologies can ignore it.'
    },

    {
      question: '18. Why are labels important in forms?',
      answer:
        'Labels identify form controls and improve usability and accessibility. Clicking a correctly connected label also focuses or activates its control.'
    },

    {
      question: '19. What is the difference between the id and name of an input?',
      answer:
        'The id connects the input to labels and scripts. The name identifies the field when form data is submitted.'
    },

    {
      question: '20. What does required do?',
      answer:
        'The required attribute asks the browser to prevent normal form submission when the control has no acceptable value.'
    },

    {
      question: '21. What is the difference between GET and POST in a form?',
      answer:
        'GET commonly places submitted values in the URL and is suited to retrieval operations. POST sends data in the request body and is commonly used when creating or submitting data.'
    },

    {
      question: '22. Why should button type be specified?',
      answer:
        'Inside a form, a button may default to submit. Setting type="button" avoids accidental form submission when the button performs another action.'
    },

    {
      question: '23. What is the viewport meta tag?',
      answer:
        'It controls how a webpage is scaled on mobile devices. A common value sets the viewport width to the device width and initial scale to one.'
    },

    {
      question: '24. What are data-* attributes?',
      answer:
        'They are custom attributes used to store application-specific information on HTML elements, such as data-id or data-status.'
    },

    {
      question: '25. When should tables be used?',
      answer:
        'Tables should be used for genuine tabular data containing related rows and columns, not for general page layout.'
    },

    {
      question: '26. What are details and summary?',
      answer:
        'They provide a native expandable component. summary is the visible control and details contains the collapsible content.'
    },

    {
      question: '27. What is ARIA?',
      answer:
        'ARIA provides accessibility roles, states and properties for interfaces where native HTML semantics are insufficient.'
    },

    {
      question: '28. Should ARIA replace semantic HTML?',
      answer:
        'No. Native semantic HTML should be preferred because it already provides browser behaviour and accessibility semantics.'
    },

    {
      question: '29. How does HTML connect with CSS and JavaScript?',
      answer:
        'HTML creates the structure, CSS controls visual presentation and JavaScript handles dynamic behaviour and interaction.'
    },

    {
      question: '30. How did you use HTML in Puzzle Grove?',
      answer:
        'I used HTML to structure the game interface, navigation, forms, buttons, puzzle content and user-facing sections. CSS handled presentation and JavaScript implemented the game behaviour.'
    }
  ]
},
  {
  id: 'css',
  title: 'CSS',
  category: 'languages',

  short:
    'The styling language used to control webpage layout, appearance, responsiveness and visual behaviour.',

  simple: [
    'CSS stands for Cascading Style Sheets.',

    'CSS controls the visual presentation of HTML elements.',

    'It can manage colours, typography, spacing, borders, backgrounds, positioning, layout, transitions and animations.',

    'A CSS rule contains a selector and one or more property-value declarations.',

    'Selectors identify which HTML elements should receive a style.',

    'The cascade decides which declaration is applied when several rules target the same element.',

    'Specificity measures how strongly a selector targets an element.',

    'Inheritance allows some properties, such as text colour and font family, to pass from parent elements to descendants.',

    'The box model describes each element as content surrounded by padding, border and margin.',

    'Flexbox is useful for one-dimensional layouts along a row or column.',

    'CSS Grid is useful for two-dimensional layouts involving rows and columns.',

    'Media queries apply different styles according to conditions such as viewport width.',

    'A mobile-first approach begins with styles for small screens and adds enhancements for wider screens.',

    'Relative units such as rem, em, %, vw and vh help create flexible interfaces.',

    'Pseudo-classes style elements in a particular state, such as hover, focus or disabled.',

    'Pseudo-elements style or generate a specific part of an element, such as ::before or ::after.',

    'Transitions animate changes between property values, while keyframe animations support multi-step animation sequences.',

    'CSS custom properties store reusable values such as colours and spacing.',

    'Responsive design combines flexible layouts, media queries, scalable units and responsive media.'
  ],

  technical: [
    'A CSS declaration consists of a property and value, while a rule combines one or more selectors with a declaration block.',

    'Selectors include element selectors, class selectors, id selectors, attribute selectors, combinators, pseudo-classes and pseudo-elements.',

    'The cascade considers origin, importance, cascade layers, specificity and source order when resolving conflicting declarations.',

    'The !important flag increases declaration priority but should not be used as a routine replacement for clear selector design.',

    'Specificity is influenced by selector categories such as inline styles, ids, classes, attributes, pseudo-classes and element selectors.',

    'When competing declarations have equal priority and specificity, the later declaration generally wins.',

    'Inheritance applies automatically only to certain properties, commonly including text-related properties.',

    'The initial keyword uses a property initial value, inherit uses the parent computed value, unset behaves as inherit or initial depending on the property, and revert restores an earlier cascade origin.',

    'The box model consists of content, padding, border and margin.',

    'With box-sizing: content-box, declared width and height apply only to the content box.',

    'With box-sizing: border-box, declared width and height include padding and border.',

    'Margin creates space outside the border, while padding creates space between content and border.',

    'Vertical margins of normal block elements can sometimes collapse.',

    'The display property controls how an element participates in layout.',

    'Common display values include block, inline, inline-block, flex, grid and none.',

    'display: none removes an element from normal layout and the accessibility tree in typical browser behaviour.',

    'visibility: hidden hides an element while preserving its layout space.',

    'opacity: 0 makes an element transparent but does not necessarily remove it from interaction or accessibility.',

    'The position property supports static, relative, absolute, fixed and sticky positioning.',

    'An absolutely positioned element is positioned relative to its nearest positioned containing ancestor, depending on the containing-block rules.',

    'A fixed element is commonly positioned relative to the viewport.',

    'A sticky element behaves normally until it reaches a defined scroll threshold within its scroll container.',

    'The z-index property participates in stacking contexts rather than creating one universal page-wide ordering.',

    'Transforms, opacity and positioned elements with z-index can create new stacking contexts.',

    'Flexbox uses a main axis and cross axis.',

    'justify-content aligns or distributes flex items along the main axis.',

    'align-items aligns items along the cross axis.',

    'flex-grow controls how available positive space is distributed.',

    'flex-shrink controls how items reduce when insufficient space exists.',

    'flex-basis specifies the initial main-size basis before free-space distribution.',

    'flex-wrap allows items to move onto additional lines.',

    'CSS Grid defines rows and columns explicitly or implicitly.',

    'grid-template-columns and grid-template-rows define explicit tracks.',

    'The fr unit represents a fraction of available grid space.',

    'repeat, minmax and auto-fit or auto-fill support responsive grid patterns.',

    'gap creates spacing between flex or grid items without requiring margins on individual children.',

    'Media queries apply rules according to media features such as width, orientation or user preferences.',

    'A mobile-first stylesheet commonly uses min-width media queries to progressively enhance the layout.',

    'rem units are relative to the root font size, while em units are relative to the relevant element font size.',

    'Percentages are resolved relative to a property-specific containing value.',

    'Viewport units include vw, vh, dvw, dvh and related variants that consider different viewport behaviours.',

    'The clamp function can create responsive values with a minimum, preferred and maximum limit.',

    'CSS custom properties are declared using names beginning with -- and accessed using var().',

    'Custom properties participate in the cascade and can be changed for themes or component scopes.',

    'Pseudo-classes include :hover, :focus, :focus-visible, :checked, :disabled, :first-child and :nth-child.',

    'Pseudo-elements include ::before, ::after, ::first-letter and ::selection.',

    'A transition animates a property change between two states.',

    'A keyframe animation defines multiple stages using @keyframes.',

    'Not every CSS property can be animated efficiently. Transform and opacity are commonly preferred for smooth animation.',

    'Object-fit controls how replaced content such as images and videos fits inside its content box.',

    'Overflow controls how content that exceeds an element box is handled.',

    'CSS reset or normalisation rules reduce browser-default inconsistencies.',

    'BEM is one optional naming convention that organises CSS classes into blocks, elements and modifiers.',

    'Responsive design should account for readable text, touch targets, keyboard focus, content reflow and reduced-motion preferences.',

    'The prefers-reduced-motion media query can reduce or disable animations for users who request less motion.'
  ],

  interview:
    'CSS is the styling language used to control the appearance and layout of HTML. I use the box model for spacing, Flexbox for one-dimensional alignment and CSS Grid for layouts involving both rows and columns. I use media queries and flexible units to build responsive interfaces. In Puzzle Grove, CSS and Bootstrap were used to create a mobile-first game interface that worked across different screen sizes.',

  keyPoints: [
    'Cascade',
    'Specificity',
    'Inheritance',
    'Box model',
    'Flexbox',
    'CSS Grid',
    'Positioning',
    'Responsive design',
    'Media queries',
    'Units',
    'Pseudo-classes',
    'Animations',
    'Custom properties',
    'Accessibility'
  ],

  code: `:root {
  --background: #f7f7fb;
  --surface: #ffffff;
  --text: #20202a;
  --accent: #6b4eff;
  --spacing: 1rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;

  font-family:
    system-ui,
    sans-serif;

  color: var(--text);
  background: var(--background);
}

.page {
  width: min(100% - 2rem, 1100px);
  margin-inline: auto;
  padding-block: 2rem;
}

.card-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(240px, 1fr));

  gap: var(--spacing);
}

.card {
  padding: 1.25rem;
  border-radius: 1rem;
  background: var(--surface);
  box-shadow: 0 8px 30px rgb(0 0 0 / 0.08);

  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 34px rgb(0 0 0 / 0.12);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 44px;
  padding: 0.7rem 1rem;

  border: 0;
  border-radius: 0.7rem;

  color: white;
  background: var(--accent);
  cursor: pointer;
}

.button:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}

@media (min-width: 768px) {
  .page {
    padding-block: 3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto;
    transition-duration: 0.01ms;
    animation-duration: 0.01ms;
  }
}`,

  followUps: [
    'What is the CSS box model?',
    'How does the cascade work?',
    'What is specificity?',
    'Flexbox versus Grid?',
    'What is position absolute relative to?',
    'What is a stacking context?',
    'What is the difference between rem and em?',
    'What is mobile-first design?',
    'What are pseudo-classes and pseudo-elements?',
    'What is the difference between display none and visibility hidden?'
  ],

  cautions: [
    'Do not say Flexbox is always better than Grid or vice versa. They solve different layout problems.',

    'Do not assume z-index works globally without considering stacking contexts.',

    'Avoid excessive use of !important because it makes the cascade harder to manage.',

    'Do not use fixed pixel widths for every layout when the design needs to adapt across devices.',

    'Hover should not be the only way to reveal essential information because touch and keyboard users may not trigger it.',

    'Animations should respect reduced-motion preferences when possible.',

    'Do not remove visible keyboard focus indicators without providing an accessible replacement.'
  ],

  qa: [
    {
      question: '1. What is CSS?',
      answer:
        'CSS stands for Cascading Style Sheets. It controls the presentation, layout and visual behaviour of HTML content.'
    },

    {
      question: '2. What is a CSS selector?',
      answer:
        'A selector identifies the elements to which a group of CSS declarations should apply.'
    },

    {
      question: '3. What is the cascade?',
      answer:
        'The cascade is the system browsers use to resolve competing CSS declarations based on origin, importance, specificity and source order.'
    },

    {
      question: '4. What is specificity?',
      answer:
        'Specificity is the relative weight of a selector. More specific selectors can override less specific selectors when their cascade priority is otherwise equal.'
    },

    {
      question: '5. What is inheritance in CSS?',
      answer:
        'Inheritance allows certain computed property values, commonly text-related properties, to pass from a parent element to its descendants.'
    },

    {
      question: '6. What is the box model?',
      answer:
        'The box model consists of content, padding, border and margin. Together they determine the element visual dimensions and spacing.'
    },

    {
      question: '7. What is box-sizing: border-box?',
      answer:
        'It makes the declared width and height include the element padding and border, which often simplifies responsive sizing.'
    },

    {
      question: '8. Margin versus padding?',
      answer:
        'Margin creates space outside an element border. Padding creates space between the content and border.'
    },

    {
      question: '9. What is margin collapsing?',
      answer:
        'Adjacent vertical margins of certain normal block elements can combine into one margin rather than being added together.'
    },

    {
      question: '10. What is the difference between block, inline and inline-block?',
      answer:
        'Block elements normally begin on a new line. Inline elements participate within text flow. Inline-block remains inline while allowing block-like sizing.'
    },

    {
      question: '11. What is Flexbox?',
      answer:
        'Flexbox is a one-dimensional layout system used to arrange and align items primarily along one row or column.'
    },

    {
      question: '12. What is CSS Grid?',
      answer:
        'CSS Grid is a two-dimensional layout system designed to control both rows and columns.'
    },

    {
      question: '13. Flexbox versus Grid?',
      answer:
        'Flexbox is usually best for one-dimensional component alignment. Grid is usually better when rows and columns must be coordinated together.'
    },

    {
      question: '14. What is the main axis in Flexbox?',
      answer:
        'The main axis follows flex-direction. justify-content operates along this axis.'
    },

    {
      question: '15. What is the cross axis in Flexbox?',
      answer:
        'The cross axis is perpendicular to the main axis. align-items commonly controls alignment along it.'
    },

    {
      question: '16. What do flex-grow, flex-shrink and flex-basis do?',
      answer:
        'flex-basis defines the initial main size, flex-grow distributes extra space and flex-shrink controls reduction when space is insufficient.'
    },

    {
      question: '17. What is the fr unit in Grid?',
      answer:
        'The fr unit represents a fraction of the available grid-container space.'
    },

    {
      question: '18. What is the difference between auto-fill and auto-fit?',
      answer:
        'Both create repeated responsive tracks. auto-fill can preserve empty tracks, while auto-fit commonly collapses empty tracks so existing items can expand.'
    },

    {
      question: '19. What is position relative?',
      answer:
        'A relatively positioned element remains in normal flow but can be offset. It can also establish a containing block for positioned descendants.'
    },

    {
      question: '20. What is position absolute?',
      answer:
        'An absolutely positioned element is removed from normal flow and positioned using its containing block, commonly the nearest positioned ancestor.'
    },

    {
      question: '21. Fixed versus sticky positioning?',
      answer:
        'Fixed positioning normally remains relative to the viewport. Sticky positioning behaves normally until it reaches a scroll threshold within its container.'
    },

    {
      question: '22. What is z-index?',
      answer:
        'z-index controls stacking order within a stacking context. It does not provide one universal ordering across unrelated stacking contexts.'
    },

    {
      question: '23. What creates a stacking context?',
      answer:
        'Examples include the root element, positioned elements with certain z-index values, transforms and elements with opacity below one.'
    },

    {
      question: '24. What is responsive web design?',
      answer:
        'Responsive design allows a layout to adapt across screen sizes using flexible dimensions, media queries, responsive media and appropriate layout systems.'
    },

    {
      question: '25. What is mobile-first design?',
      answer:
        'Mobile-first design begins with styles for smaller screens and adds enhancements for larger screens, commonly using min-width media queries.'
    },

    {
      question: '26. What is the difference between px, em and rem?',
      answer:
        'px is a CSS pixel unit. em is relative to the relevant element font size, while rem is relative to the root font size.'
    },

    {
      question: '27. What is a pseudo-class?',
      answer:
        'A pseudo-class selects an element according to a state or relationship, such as :hover, :focus, :checked or :first-child.'
    },

    {
      question: '28. What is a pseudo-element?',
      answer:
        'A pseudo-element targets a conceptual part of an element or generates presentational content, such as ::before and ::after.'
    },

    {
      question: '29. display: none versus visibility: hidden?',
      answer:
        'display: none removes the element from layout. visibility: hidden hides it while preserving its layout space.'
    },

    {
      question: '30. What are CSS custom properties?',
      answer:
        'Custom properties are reusable values declared with names beginning with -- and read using var(). They participate in the cascade.'
    },

    {
      question: '31. Transition versus animation?',
      answer:
        'A transition animates a change between states. A keyframe animation can define several stages and run independently of a direct property-state change.'
    },

    {
      question: '32. Why prefer transform and opacity for animation?',
      answer:
        'They can often be rendered more efficiently than properties that repeatedly trigger layout and painting.'
    },

    {
      question: '33. What is object-fit?',
      answer:
        'object-fit controls how replaced content such as images or videos is resized within its box, using values such as cover or contain.'
    },

    {
      question: '34. Why should !important be avoided?',
      answer:
        'Frequent use makes overrides and debugging difficult by bypassing the normal cascade. Clear architecture and appropriate selector specificity are usually better.'
    },

    {
      question: '35. How did you use CSS in Puzzle Grove?',
      answer:
        'I used CSS for the game layout, visual states, spacing and responsive behaviour. Flexbox handled component alignment, while Grid supported board-style layouts.'
    }
  ]
},
  {
  id: 'javascript',
  title: 'JavaScript',
  category: 'languages',

  short:
    'The programming language used to add behaviour, state, logic and interactivity to web applications.',

  simple: [
    'JavaScript is a high-level, dynamically typed programming language used extensively in web development.',

    'In the browser, JavaScript can respond to events, validate forms, modify webpage content, call APIs and manage application state.',

    'JavaScript can also run outside the browser using environments such as Node.js.',

    'JavaScript is dynamically typed, meaning a variable can refer to values of different types during execution.',

    'JavaScript supports primitive values, objects, arrays and functions.',

    'Functions are first-class values, so they can be assigned to variables, passed to other functions and returned from functions.',

    'The DOM is the browser representation of the webpage that JavaScript can inspect and modify.',

    'Events represent user and browser actions such as clicks, typing, submissions and page loading.',

    'Promises represent the eventual completion or failure of asynchronous work.',

    'async and await provide a readable syntax for working with promises.',

    'JavaScript uses an event loop to coordinate synchronous code, asynchronous callbacks and queued tasks.',

    'Objects store related data using key-value properties.',

    'Arrays store ordered collections of values.',

    'Closures allow functions to remember values from their surrounding lexical scope.',

    'Modules allow code to be divided into reusable files using import and export.',

    'Browser storage such as localStorage can preserve small amounts of data between page visits.',

    'In Puzzle Grove, JavaScript handles puzzle rules, answer checking, user interactions, game state, streaks and achievements.'
  ],

  technical: [
    'JavaScript follows the ECMAScript language specification.',

    'JavaScript is dynamically typed because types belong to values rather than being fixed permanently to variable names.',

    'JavaScript is generally considered strongly typed in the sense that values retain types, although it also performs several implicit conversions.',

    'Primitive types include string, number, bigint, boolean, undefined, symbol and null.',

    'Objects include ordinary objects, arrays, functions, dates, maps, sets and many other built-in structures.',

    'The typeof operator returns a string describing the broad runtime type of a value, although typeof null historically returns "object".',

    'let and const are block-scoped, while var is function-scoped and has older hoisting behaviour.',

    'const prevents reassignment of the variable binding but does not make an object deeply immutable.',

    'Declarations are processed before normal execution, but access behaviour depends on the declaration type.',

    'let and const exist in the temporal dead zone before their declaration is evaluated.',

    'Function declarations are generally available before their textual position within the scope.',

    'JavaScript uses lexical scope, meaning variable accessibility is based on where code is written.',

    'A closure is created when a function retains access to variables from an outer lexical environment.',

    'The this value depends on how a normal function is called rather than only where it was declared.',

    'Arrow functions do not create their own this binding and instead use the surrounding lexical this.',

    'Arrow functions also do not provide their own arguments object and cannot be used as constructors.',

    'The == operator allows type coercion during comparison.',

    'The === operator compares without type coercion and is usually preferred for predictable equality checks.',

    'Object.is provides another equality algorithm that differs for values such as NaN and signed zero.',

    'Falsy values include false, 0, -0, 0n, an empty string, null, undefined and NaN.',

    'The nullish coalescing operator ?? uses its right side only when the left side is null or undefined.',

    'The logical OR operator || uses its right side when the left side is any falsy value.',

    'Optional chaining ?. safely accesses a property or calls a function when the receiver is not null or undefined.',

    'Objects are reference values. Assigning an object to another variable copies the reference rather than deeply cloning the object.',

    'The spread syntax can create shallow copies of arrays and objects.',

    'A shallow copy duplicates the outer container but keeps references to nested objects.',

    'Destructuring extracts values from arrays or properties from objects into variables.',

    'Array methods such as map, filter and reduce support functional-style transformations.',

    'map returns a new array containing transformed values.',

    'filter returns a new array containing elements that satisfy a condition.',

    'reduce combines array elements into one accumulated result.',

    'forEach runs a function for each element but does not itself create a transformed array.',

    'A callback is a function passed to another function for later or conditional execution.',

    'Synchronous code runs directly on the call stack.',

    'The event loop coordinates the call stack with queued asynchronous work.',

    'Promise reactions are commonly processed through the microtask queue.',

    'Timer callbacks are scheduled through task queues and do not necessarily run immediately after their delay expires.',

    'A Promise can be pending, fulfilled or rejected.',

    'then handles fulfilment, catch handles rejection and finally runs after settlement.',

    'An async function always returns a Promise.',

    'await pauses execution within an async function until the awaited value settles, without blocking the entire JavaScript runtime.',

    'Promise.all waits for all provided promises and rejects when one rejects.',

    'Promise.allSettled waits for every promise and returns the outcome of each one.',

    'The fetch API performs HTTP requests and resolves even for many HTTP error status codes, so response.ok should be checked.',

    'JSON.stringify converts compatible JavaScript data into a JSON string.',

    'JSON.parse converts valid JSON text into JavaScript values.',

    'The DOM provides methods such as querySelector, createElement and addEventListener.',

    'Event bubbling means an event can travel from the target element upward through ancestors.',

    'Event capturing travels from outer ancestors toward the target before the bubbling phase.',

    'Event delegation attaches one listener to a parent and handles events from matching descendants.',

    'preventDefault stops the browser default behaviour when the event is cancelable.',

    'stopPropagation prevents further propagation through the event path.',

    'localStorage stores string values without an automatic expiration time.',

    'sessionStorage stores data for the lifetime of the browser tab or page session.',

    'Cookies can be sent with HTTP requests and support security attributes, unlike localStorage values.',

    'Browser storage should not be treated as secure storage for sensitive secrets.',

    'ES modules use export and import and have their own module scope.',

    'JavaScript uses prototypal inheritance. Objects can inherit properties and methods through a prototype chain.',

    'Class syntax provides a more familiar abstraction over JavaScript prototype-based behaviour.',

    'Garbage collection reclaims objects that are no longer reachable, but applications can still retain unnecessary references and leak memory logically.',

    'Debouncing delays repeated execution until activity stops for a specified period.',

    'Throttling limits how often a function can run within a period.',

    'Strict mode enables stricter parsing and error handling for certain unsafe behaviours.'
  ],

  interview:
    'JavaScript is the programming language responsible for browser-side behaviour and interactivity. In Puzzle Grove, I used JavaScript for game logic, answer validation, user interactions, state updates, streak tracking and achievement progression. I understand concepts such as DOM manipulation, events, arrays and objects, promises, async and await, closures and browser storage. HTML provides the structure, CSS handles presentation and JavaScript makes the interface dynamic.',

  keyPoints: [
    'Types and coercion',
    'Scope',
    'Closures',
    'Functions',
    'Objects and arrays',
    'DOM',
    'Events',
    'Promises',
    'Async and await',
    'Event loop',
    'Modules',
    'Browser storage',
    'Prototypes',
    'Error handling'
  ],

  code: `const gameState = {
  currentAttempt: 0,
  guesses: [],
  completed: false,
  score: 0
};

const answerForm =
  document.querySelector("#answer-form");

const answerInput =
  document.querySelector("#answer");

const message =
  document.querySelector("#message");

function checkAnswer(answer, expectedAnswer) {
  return answer
    .trim()
    .toLowerCase() ===
    expectedAnswer.toLowerCase();
}

function saveGameState() {
  localStorage.setItem(
    "puzzle-game-state",
    JSON.stringify(gameState)
  );
}

function loadGameState() {
  const savedState =
    localStorage.getItem("puzzle-game-state");

  if (savedState === null) {
    return;
  }

  const parsedState = JSON.parse(savedState);

  Object.assign(gameState, parsedState);
}

answerForm?.addEventListener(
  "submit",
  function handleSubmit(event) {
    event.preventDefault();

    const answer = answerInput?.value ?? "";

    gameState.currentAttempt += 1;
    gameState.guesses.push(answer);

    if (checkAnswer(answer, "react")) {
      gameState.completed = true;
      gameState.score += 10;

      if (message) {
        message.textContent = "Correct answer";
      }
    } else if (message) {
      message.textContent = "Try again";
    }

    saveGameState();
  }
);

loadGameState();`,

  followUps: [
    'What is the difference between let, const and var?',
    'What is a closure?',
    'What is the event loop?',
    'What is the difference between == and ===?',
    'What is a Promise?',
    'How does async and await work?',
    'What is event bubbling?',
    'What is localStorage?',
    'What is shallow copy?',
    'What is the difference between map, filter and reduce?'
  ],

  cautions: [
    'Do not say JavaScript and Java are the same or directly related languages.',

    'const does not make an object deeply immutable.',

    'Do not use == when strict equality is more appropriate and predictable.',

    'await does not block the entire browser thread while asynchronous work is pending.',

    'fetch does not reject automatically for every HTTP error status such as 404 or 500.',

    'localStorage should not be described as secure production authentication.',

    'Do not claim Puzzle Grove has backend authentication unless the code actually uses a backend authentication service.'
  ],

  qa: [
    {
      question: '1. What is JavaScript?',
      answer:
        'JavaScript is a high-level, dynamically typed programming language used to add logic, behaviour and interactivity to web applications.'
    },

    {
      question: '2. Is JavaScript the same as Java?',
      answer:
        'No. They are separate languages with different type systems, runtimes and programming models.'
    },

    {
      question: '3. What are JavaScript primitive types?',
      answer:
        'The primitive types are string, number, bigint, boolean, undefined, symbol and null.'
    },

    {
      question: '4. What is dynamic typing?',
      answer:
        'Dynamic typing means a variable name can refer to values of different types during runtime.'
    },

    {
      question: '5. let versus const versus var?',
      answer:
        'let and const are block-scoped. let permits reassignment, while const does not. var is function-scoped and has older hoisting behaviour.'
    },

    {
      question: '6. Does const make an object immutable?',
      answer:
        'No. It prevents reassignment of the variable binding, but properties of the referenced object may still be changed.'
    },

    {
      question: '7. What is hoisting?',
      answer:
        'Hoisting describes how declarations are processed before normal execution. The exact behaviour differs among function declarations, var, let and const.'
    },

    {
      question: '8. What is the temporal dead zone?',
      answer:
        'It is the period between entering a scope and evaluating a let or const declaration, during which accessing the variable throws an error.'
    },

    {
      question: '9. What is scope?',
      answer:
        'Scope determines where variables and functions can be accessed. JavaScript uses lexical scope based on the location where code is written.'
    },

    {
      question: '10. What is a closure?',
      answer:
        'A closure is a function that retains access to variables from its surrounding lexical scope even after the outer function has completed.'
    },

    {
      question: '11. What is the difference between a normal function and an arrow function?',
      answer:
        'Arrow functions use lexical this and do not have their own arguments object. Normal functions receive this according to how they are called.'
    },

    {
      question: '12. What is the this keyword?',
      answer:
        'In a normal function, this refers to a value determined by the call context. In an arrow function, this is inherited from the surrounding scope.'
    },

    {
      question: '13. What is the difference between == and ===?',
      answer:
        '== permits type coercion before comparison. === compares type and value without that coercion and is usually preferred.'
    },

    {
      question: '14. What are truthy and falsy values?',
      answer:
        'Falsy values behave as false in Boolean contexts. All other values are truthy.'
    },

    {
      question: '15. What is the difference between || and ??',
      answer:
        '|| uses the right value when the left value is falsy. ?? uses the right value only when the left value is null or undefined.'
    },

    {
      question: '16. What is optional chaining?',
      answer:
        'Optional chaining uses ?. to safely access properties or methods when an intermediate value may be null or undefined.'
    },

    {
      question: '17. Are objects copied by value?',
      answer:
        'Assigning an object to another variable copies the reference value. Both variables can therefore refer to the same object.'
    },

    {
      question: '18. What is a shallow copy?',
      answer:
        'A shallow copy creates a new outer object or array but keeps references to nested objects.'
    },

    {
      question: '19. What is destructuring?',
      answer:
        'Destructuring extracts array items or object properties into individual variables using concise syntax.'
    },

    {
      question: '20. What does map do?',
      answer:
        'map creates a new array by applying a transformation function to each element.'
    },

    {
      question: '21. What does filter do?',
      answer:
        'filter creates a new array containing only elements for which the provided condition returns true.'
    },

    {
      question: '22. What does reduce do?',
      answer:
        'reduce processes array values into one accumulated result, such as a total, object or grouped structure.'
    },

    {
      question: '23. What is a callback?',
      answer:
        'A callback is a function passed to another function so it can be executed later or under a particular condition.'
    },

    {
      question: '24. What is the call stack?',
      answer:
        'The call stack tracks currently executing functions. A function is pushed when called and removed when it finishes.'
    },

    {
      question: '25. What is the event loop?',
      answer:
        'The event loop coordinates the call stack with queued asynchronous work and schedules callbacks when the stack is available.'
    },

    {
      question: '26. What is a Promise?',
      answer:
        'A Promise represents the eventual completion or failure of an asynchronous operation. It can be pending, fulfilled or rejected.'
    },

    {
      question: '27. What does an async function return?',
      answer:
        'An async function always returns a Promise, even when it directly returns a normal value.'
    },

    {
      question: '28. What does await do?',
      answer:
        'await pauses the current async function until the awaited value settles while allowing the runtime to process other work.'
    },

    {
      question: '29. Promise.all versus Promise.allSettled?',
      answer:
        'Promise.all rejects when one input rejects. Promise.allSettled waits for every input and reports each fulfilment or rejection.'
    },

    {
      question: '30. Does fetch reject on a 404 response?',
      answer:
        'Usually no. fetch commonly resolves with a Response object for HTTP error statuses, so response.ok or status should be checked.'
    },

    {
      question: '31. What is the DOM?',
      answer:
        'The DOM is the browser-created object tree representing the HTML document. JavaScript can query and modify it.'
    },

    {
      question: '32. What is event bubbling?',
      answer:
        'Event bubbling is the phase in which an event travels from the target element upward through its ancestors.'
    },

    {
      question: '33. What is event delegation?',
      answer:
        'Event delegation attaches one listener to a parent and handles events originating from matching descendant elements.'
    },

    {
      question: '34. preventDefault versus stopPropagation?',
      answer:
        'preventDefault stops the browser default action. stopPropagation stops the event from continuing through the propagation path.'
    },

    {
      question: '35. localStorage versus sessionStorage?',
      answer:
        'localStorage persists until explicitly cleared. sessionStorage normally lasts only for the current browser-tab session.'
    },

    {
      question: '36. Is localStorage secure for authentication tokens?',
      answer:
        'It is accessible to JavaScript running on the page and can be exposed by cross-site scripting. Its use for sensitive tokens requires careful security design.'
    },

    {
      question: '37. What are JavaScript modules?',
      answer:
        'Modules split code into separate files with explicit import and export relationships and their own module scope.'
    },

    {
      question: '38. What is prototypal inheritance?',
      answer:
        'Objects can delegate property and method lookup to another object through the prototype chain.'
    },

    {
      question: '39. What is debouncing?',
      answer:
        'Debouncing delays a function until repeated activity has stopped for a specified time, which is useful for search input handling.'
    },

    {
      question: '40. What is throttling?',
      answer:
        'Throttling limits a function to running at most once within a defined time interval.'
    },

    {
      question: '41. How did you use JavaScript in Puzzle Grove?',
      answer:
        'I used JavaScript for puzzle rules, answer checking, user events, game-state updates, streak calculations, achievements and browser-based progress persistence.'
    }
  ]
},
  {
  id: 'typescript',
  title: 'TypeScript',
  category: 'languages',

  short:
    'A statically typed superset of JavaScript that catches many errors during development and improves maintainability.',

  simple: [
    'TypeScript is a programming language built on top of JavaScript.',

    'It includes all valid JavaScript syntax and adds features such as static types, interfaces, generics and type checking.',

    'TypeScript code is converted into JavaScript before it runs in a browser or JavaScript runtime.',

    'Browsers do not directly execute TypeScript source code.',

    'Static typing means TypeScript can detect many type-related mistakes while the application is being developed.',

    'For example, TypeScript can warn if a function expects a number but receives a string.',

    'TypeScript improves editor suggestions, autocomplete, navigation and refactoring.',

    'It is especially useful in larger projects where many components, functions and data structures interact.',

    'TypeScript types describe the expected shape of data.',

    'An interface can describe the properties that an object should contain.',

    'A type alias can describe objects, unions, primitive combinations and other custom types.',

    'Union types allow a value to have one of several permitted types.',

    'Optional properties represent values that may or may not exist.',

    'Generics allow reusable code to work safely with different data types.',

    'TypeScript can infer many types automatically, so every variable does not need an explicit annotation.',

    'TypeScript types are mainly used during development and are generally removed from the generated JavaScript.',

    'TypeScript does not replace runtime validation. Data received from users, APIs or storage must still be checked at runtime.',

    'In the Healthcare Vitals Tracker, TypeScript can define clear structures for users, authentication state and health readings.'
  ],

  technical: [
    'TypeScript is a superset of JavaScript, meaning valid JavaScript is generally valid TypeScript.',

    'The TypeScript compiler checks source code and can emit JavaScript that runs in browsers or JavaScript runtimes.',

    'TypeScript uses static analysis to identify problems before the program is executed.',

    'Type annotations explicitly describe the expected type of variables, parameters and return values.',

    'Type inference allows the compiler to determine types from initial values and surrounding context.',

    'Primitive types include string, number, boolean, bigint, symbol, null and undefined.',

    'Arrays can be written using number[] or Array<number>.',

    'A tuple represents an array with a known number of positions and known types for those positions.',

    'Object types describe the names and types of object properties.',

    'An optional property is marked using a question mark, such as measuredAt?: string.',

    'A readonly property cannot be reassigned through that typed reference after initialisation.',

    'readonly provides compile-time protection and does not automatically freeze the JavaScript object at runtime.',

    'A union type allows a value to match one of several types, such as string | null.',

    'An intersection type combines multiple types into one type using the & operator.',

    'Literal types restrict values to specific strings, numbers or booleans.',

    'A discriminated union uses a shared literal property to distinguish between several possible object shapes.',

    'Type narrowing reduces a broad type to a more specific type after checks such as typeof, instanceof, equality or property tests.',

    'A type guard is a runtime condition that helps TypeScript understand a value type within a particular branch.',

    'A custom type predicate has a return type such as value is VitalReading.',

    'The any type disables most type checking for the affected value and should be used sparingly.',

    'The unknown type can represent an unknown value more safely than any because it must be checked before use.',

    'The never type represents a value that should never occur, such as a function that always throws or an exhaustively handled impossible branch.',

    'The void type commonly describes a function whose return value is not intended to be used.',

    'An interface describes the structure of objects and can be extended or declaration-merged.',

    'A type alias can represent object types, unions, intersections, tuples, primitive aliases and mapped types.',

    'Interfaces and type aliases overlap significantly for ordinary object shapes.',

    'TypeScript uses structural typing, meaning compatibility is based mainly on the shape of a value rather than its explicit declared name.',

    'Generics allow types to be passed as parameters to reusable functions, classes and interfaces.',

    'Generic constraints restrict which types can be supplied to a generic using the extends keyword.',

    'The keyof operator produces a union of known property names from a type.',

    'The typeof operator can be used in a type position to derive a type from a JavaScript value declaration.',

    'Indexed access types retrieve the type of a property, such as VitalReading["systolic"].',

    'The in operator is used in mapped types and can also act as a runtime property check for narrowing.',

    'Conditional types select a type based on whether one type extends another.',

    'Mapped types transform every property of an existing type.',

    'Utility types such as Partial, Required, Readonly, Pick, Omit and Record provide reusable type transformations.',

    'Partial<T> makes all properties optional.',

    'Required<T> makes all properties required.',

    'Readonly<T> marks all properties as readonly in the resulting type.',

    'Pick<T, K> creates a type containing selected properties.',

    'Omit<T, K> creates a type excluding selected properties.',

    'Record<K, V> describes an object with keys of type K and values of type V.',

    'ReturnType<T> extracts the return type of a function type.',

    'Parameters<T> extracts function parameter types as a tuple.',

    'The as keyword performs a type assertion, telling TypeScript to treat a value as a particular type.',

    'A type assertion does not validate or convert the value at runtime.',

    'The non-null assertion operator ! tells TypeScript that a value is not null or undefined, but it can hide genuine runtime errors.',

    'The satisfies operator verifies that a value is compatible with a type while preserving a more specific inferred type where possible.',

    'Function overload signatures can describe several permitted ways to call one implementation.',

    'Optional parameters are marked with ?, while default parameters provide a runtime fallback value.',

    'Enums provide named values, although string-literal unions are often simpler for many frontend state cases.',

    'A namespace groups names, although modern frontend projects generally use ES modules with import and export.',

    'Declaration files use the .d.ts extension and describe types for JavaScript code, libraries or non-code imports.',

    'The vite-env.d.ts file commonly includes Vite client type declarations for asset and environment support.',

    'A custom declaration such as declare module "*.css" can tell TypeScript how to accept CSS imports.',

    'The tsconfig.json file controls TypeScript compiler behaviour.',

    'The strict option enables a collection of stronger type-checking rules.',

    'strictNullChecks treats null and undefined as distinct types that must be handled explicitly.',

    'noImplicitAny reports values that TypeScript would otherwise infer as any without an explicit decision.',

    'noUncheckedSideEffectImports can report imports such as CSS files when no matching declaration is available.',

    'noEmit tells the compiler to perform type checking without generating JavaScript files.',

    'In many Vite projects, TypeScript performs type checking while Vite handles development serving and production bundling.',

    'The development server may display an application even when a separate production type-check command would fail.',

    'Running npm run build is therefore important before deployment because it can include stricter TypeScript checks.',

    'TypeScript types are erased during compilation, so interfaces and type aliases do not exist as runtime objects.',

    'External data from APIs, localStorage, forms or databases must be validated at runtime because TypeScript cannot guarantee its actual runtime shape.',

    'In React, props and state can be typed to ensure components receive predictable data.',

    'React event types such as ChangeEvent and FormEvent can describe browser events in TypeScript components.',

    'TypeScript can model asynchronous functions using Promise-based return types.',

    'An async function returning a VitalReading should generally have a return type such as Promise<VitalReading>.'
  ],

  interview:
    'TypeScript is a statically typed superset of JavaScript. It adds compile-time type checking while still producing JavaScript for browser execution. I used TypeScript in the Healthcare Vitals Tracker to define predictable structures for health readings, authenticated users, form values and component props. It helped catch incorrect property names and incompatible values during development and made the React code easier to understand and refactor. I also understand that TypeScript types are removed during compilation, so API and user input still require runtime validation.',

  keyPoints: [
    'Static typing',
    'Type inference',
    'Interfaces',
    'Type aliases',
    'Union types',
    'Generics',
    'Narrowing',
    'Type guards',
    'Utility types',
    'Structural typing',
    'Declaration files',
    'tsconfig',
    'Runtime validation',
    'React typing'
  ],

  code: `type ReadingType =
  | "blood-pressure"
  | "blood-sugar";

interface BaseReading {
  id: string;
  userId: string;
  measuredAt: string;
}

interface BloodPressureReading
  extends BaseReading {
  type: "blood-pressure";
  systolic: number;
  diastolic: number;
}

interface BloodSugarReading
  extends BaseReading {
  type: "blood-sugar";
  bloodSugar: number;
}

type VitalReading =
  | BloodPressureReading
  | BloodSugarReading;

type NewReading =
  Omit<VitalReading, "id" | "userId">;

type ReadingStatus =
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: VitalReading[];
    }
  | {
      status: "error";
      message: string;
    };

function formatReading(
  reading: VitalReading
): string {
  if (reading.type === "blood-pressure") {
    return (
      reading.systolic +
      "/" +
      reading.diastolic +
      " mmHg"
    );
  }

  return reading.bloodSugar + " mg/dL";
}

function isVitalReading(
  value: unknown
): value is VitalReading {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const candidate =
    value as Record<string, unknown>;

  if (
    typeof candidate.id !== "string" ||
    typeof candidate.userId !== "string" ||
    typeof candidate.measuredAt !== "string"
  ) {
    return false;
  }

  if (candidate.type === "blood-pressure") {
    return (
      typeof candidate.systolic === "number" &&
      typeof candidate.diastolic === "number"
    );
  }

  if (candidate.type === "blood-sugar") {
    return (
      typeof candidate.bloodSugar === "number"
    );
  }

  return false;
}

async function fetchReadings():
  Promise<VitalReading[]> {
  const response =
    await fetch("/api/readings");

  if (!response.ok) {
    throw new Error(
      "Unable to fetch readings"
    );
  }

  const data: unknown =
    await response.json();

  if (!Array.isArray(data)) {
    throw new Error(
      "Invalid response format"
    );
  }

  const validReadings =
    data.filter(isVitalReading);

  return validReadings;
}`,

  followUps: [
    'What is TypeScript?',
    'How is TypeScript different from JavaScript?',
    'Does TypeScript run in the browser?',
    'Interface versus type alias?',
    'What is type inference?',
    'What is a union type?',
    'What is a generic?',
    'What is the difference between any and unknown?',
    'What is type narrowing?',
    'Why is runtime validation still required?'
  ],

  cautions: [
    'Do not say browsers directly execute TypeScript. TypeScript is converted into JavaScript first.',

    'Do not claim TypeScript guarantees that API data is valid at runtime.',

    'Avoid using any simply to remove compiler errors because it disables useful checking.',

    'Type assertions do not convert or validate runtime values.',

    'readonly does not automatically freeze a JavaScript object at runtime.',

    'The non-null assertion operator can hide genuine null-related problems.',

    'Do not say interfaces are converted into JavaScript classes. Interfaces are removed during compilation.',

    'Do not claim TypeScript makes JavaScript completely error-free. It mainly catches errors that can be identified through static analysis.'
  ],

  qa: [
    {
      question: '1. What is TypeScript?',
      answer:
        'TypeScript is a statically typed superset of JavaScript. It adds type checking and development-time language features and is converted into JavaScript before execution.'
    },

    {
      question: '2. Why use TypeScript instead of JavaScript?',
      answer:
        'TypeScript can detect incompatible values, missing properties and incorrect function usage during development. It also improves autocomplete, navigation and refactoring.'
    },

    {
      question: '3. Does TypeScript run directly in the browser?',
      answer:
        'No. Browsers execute JavaScript. TypeScript source code must first be transformed into JavaScript.'
    },

    {
      question: '4. Is every JavaScript program valid TypeScript?',
      answer:
        'Most valid JavaScript syntax is accepted by TypeScript, although compiler settings and type-checking rules may report errors that JavaScript itself would allow.'
    },

    {
      question: '5. What is static typing?',
      answer:
        'Static typing means the compiler analyses expected value types before runtime and reports many incompatible operations during development.'
    },

    {
      question: '6. What is type inference?',
      answer:
        'Type inference allows TypeScript to determine a value type automatically from its initial value, return expression or surrounding context.'
    },

    {
      question: '7. When should you add explicit types?',
      answer:
        'Explicit types are useful for public function boundaries, component props, complex data structures, API models and cases where inference is unclear or too broad.'
    },

    {
      question: '8. What is an interface?',
      answer:
        'An interface describes the expected structure of an object, including properties, methods and optional or readonly members.'
    },

    {
      question: '9. What is a type alias?',
      answer:
        'A type alias assigns a name to a type. It can represent object shapes, unions, intersections, tuples, primitives and other derived types.'
    },

    {
      question: '10. Interface versus type alias?',
      answer:
        'Both can describe object shapes. Interfaces support extension and declaration merging, while type aliases can directly represent unions, intersections, tuples and primitive combinations.'
    },

    {
      question: '11. What is declaration merging?',
      answer:
        'TypeScript can combine compatible interface declarations with the same name into one interface definition.'
    },

    {
      question: '12. What is structural typing?',
      answer:
        'Structural typing means compatibility depends mainly on whether a value has the required shape rather than whether it was created from a specifically named type.'
    },

    {
      question: '13. What is a union type?',
      answer:
        'A union type permits a value to match one of several types, such as string | null or "loading" | "success" | "error".'
    },

    {
      question: '14. What is an intersection type?',
      answer:
        'An intersection combines several types. The resulting value must satisfy the requirements of all combined types.'
    },

    {
      question: '15. What is a literal type?',
      answer:
        'A literal type restricts a value to a specific literal such as "success", 200 or true rather than the broader string, number or boolean type.'
    },

    {
      question: '16. What is a discriminated union?',
      answer:
        'It is a union of object types that share a literal property, such as status or type, which TypeScript uses to narrow the object to the correct variant.'
    },

    {
      question: '17. What is type narrowing?',
      answer:
        'Type narrowing is the process of reducing a broad type to a more specific type after a runtime check.'
    },

    {
      question: '18. How can TypeScript narrow a type?',
      answer:
        'Common techniques include typeof, instanceof, equality checks, the in operator, truthiness checks and discriminated-union properties.'
    },

    {
      question: '19. What is a type guard?',
      answer:
        'A type guard is a runtime condition that also gives TypeScript enough information to treat a value as a more specific type inside a branch.'
    },

    {
      question: '20. What is a custom type predicate?',
      answer:
        'A custom type predicate is a function return type such as value is VitalReading that tells TypeScript what type is established when the function returns true.'
    },

    {
      question: '21. What is any?',
      answer:
        'any disables most type checking for the affected value. It can be useful during migration but should be limited because errors can pass through unchecked.'
    },

    {
      question: '22. What is unknown?',
      answer:
        'unknown represents a value whose type is not yet known. It is safer than any because the value must be narrowed or validated before most operations.'
    },

    {
      question: '23. any versus unknown?',
      answer:
        'any permits almost all operations without checking. unknown requires type checks before the value can be used safely.'
    },

    {
      question: '24. What is never?',
      answer:
        'never represents a value that cannot occur. It is used for functions that never return and for exhaustive checks of impossible union branches.'
    },

    {
      question: '25. What is void?',
      answer:
        'void commonly describes a function whose return value is not intended to be consumed.'
    },

    {
      question: '26. What is a generic?',
      answer:
        'A generic accepts one or more type parameters so reusable code can preserve type relationships while working with different data types.'
    },

    {
      question: '27. Why use generics?',
      answer:
        'Generics avoid duplicating similar code and preserve more type information than using broad types such as any.'
    },

    {
      question: '28. What is a generic constraint?',
      answer:
        'A constraint limits which types can be used for a generic parameter, commonly using extends.'
    },

    {
      question: '29. What does keyof do?',
      answer:
        'keyof produces a union containing the known property names of a type.'
    },

    {
      question: '30. What does typeof do in a type position?',
      answer:
        'It derives a TypeScript type from the declared shape of an existing JavaScript value.'
    },

    {
      question: '31. What is an indexed access type?',
      answer:
        'It extracts the type of a property from another type, such as VitalReading["measuredAt"].'
    },

    {
      question: '32. What is Partial?',
      answer:
        'Partial<T> produces a type where every property of T is optional.'
    },

    {
      question: '33. What is Required?',
      answer:
        'Required<T> produces a type where every property of T is required.'
    },

    {
      question: '34. What is Pick?',
      answer:
        'Pick<T, K> creates a type containing only the selected properties from T.'
    },

    {
      question: '35. What is Omit?',
      answer:
        'Omit<T, K> creates a type by removing selected properties from T.'
    },

    {
      question: '36. What is Record?',
      answer:
        'Record<K, V> describes an object whose permitted keys are K and whose values have type V.'
    },

    {
      question: '37. What does readonly mean?',
      answer:
        'readonly prevents reassignment of a property through that typed reference. It is a compile-time restriction and does not automatically freeze the runtime object.'
    },

    {
      question: '38. What is a type assertion?',
      answer:
        'A type assertion tells TypeScript to treat a value as a specified type. It does not perform runtime validation or data conversion.'
    },

    {
      question: '39. What is the non-null assertion operator?',
      answer:
        'The ! operator tells TypeScript that a value is not null or undefined. If that assumption is wrong, the program can still fail at runtime.'
    },

    {
      question: '40. What does satisfies do?',
      answer:
        'satisfies checks that a value is compatible with a type while often preserving more specific inferred information than a direct annotation.'
    },

    {
      question: '41. What is a tuple?',
      answer:
        'A tuple is an array type with defined element positions and types, such as [string, number].'
    },

    {
      question: '42. What are optional properties?',
      answer:
        'Optional properties are marked with ? and may be absent from an object.'
    },

    {
      question: '43. What is a declaration file?',
      answer:
        'A .d.ts file supplies TypeScript declarations for JavaScript libraries, global values, assets or modules without providing runtime implementation.'
    },

    {
      question: '44. Why was vite-env.d.ts required?',
      answer:
        'It references Vite client type declarations so TypeScript understands Vite-specific modules, assets and environment definitions.'
    },

    {
      question: '45. Why was declare module "*.css" required?',
      answer:
        'It tells TypeScript that CSS files are valid import targets when the compiler configuration checks side-effect imports strictly.'
    },

    {
      question: '46. What is tsconfig.json?',
      answer:
        'tsconfig.json defines TypeScript compiler options, included source files, module settings, output behaviour and strictness rules.'
    },

    {
      question: '47. What does strict mode do?',
      answer:
        'The strict compiler option enables several stronger checks, including stricter null handling and implicit-any detection.'
    },

    {
      question: '48. What is noImplicitAny?',
      answer:
        'It reports places where TypeScript would infer any because no usable type information was provided.'
    },

    {
      question: '49. What is strictNullChecks?',
      answer:
        'It treats null and undefined as separate types that must be handled explicitly instead of being accepted almost everywhere.'
    },

    {
      question: '50. What does noEmit mean?',
      answer:
        'noEmit tells TypeScript to perform type checking without writing generated JavaScript files.'
    },

    {
      question: '51. Why can localhost work while the production build fails?',
      answer:
        'The Vite development server can transform and display the application without running the same full type-check command. The production build may separately run tsc and reject type errors.'
    },

    {
      question: '52. Are TypeScript types available at runtime?',
      answer:
        'Generally no. Interfaces, type aliases and most annotations are removed when TypeScript is converted into JavaScript.'
    },

    {
      question: '53. Why is runtime validation still required?',
      answer:
        'TypeScript cannot guarantee the actual contents of network responses, form input, browser storage or external JavaScript values at runtime.'
    },

    {
      question: '54. How do you type an async function?',
      answer:
        'An async function return type is represented using Promise, such as Promise<VitalReading[]> for a function that eventually returns an array of readings.'
    },

    {
      question: '55. How do you type React component props?',
      answer:
        'Define an interface or type describing the expected properties and use it as the component parameter type.'
    },

    {
      question: '56. How did you use TypeScript in the Healthcare Vitals Tracker?',
      answer:
        'I used TypeScript to describe health-reading records, authentication-related values, React component props and form state. It helped ensure fields such as systolic pressure, diastolic pressure, sugar level and timestamps used predictable types.'
    },

    {
      question: '57. TypeScript versus JavaScript?',
      answer:
        'JavaScript runs directly in JavaScript environments and is dynamically typed. TypeScript adds static analysis and development-time types, then produces JavaScript for execution.'
    },

    {
      question: '58. Can TypeScript prevent all runtime errors?',
      answer:
        'No. It catches many statically detectable errors, but network failures, invalid external data, incorrect business logic and runtime environment problems can still occur.'
    }
  ]
},
  {
  id: 'react',
  title: 'React',
  category: 'frontend',

  short:
    'A component-based JavaScript library used to build interactive and reusable user interfaces.',

  simple: [
    'React is a JavaScript library used for building user interfaces.',

    'React applications are divided into small reusable pieces called components.',

    'A component can represent one part of the interface, such as a navbar, form, card, button or dashboard section.',

    'Components make code easier to reuse, test and maintain.',

    'React uses JSX, which allows HTML-like syntax to be written inside JavaScript or TypeScript files.',

    'Props are used to pass data from a parent component to a child component.',

    'State stores information that can change while the application is running.',

    'When state changes, React updates the relevant part of the interface.',

    'Hooks are functions that allow functional components to use state and other React features.',

    'useState is used to store component state.',

    'useEffect is used for side effects such as fetching data, subscribing to events or synchronising with an external system.',

    'React supports conditional rendering, which means different UI can be shown depending on application state.',

    'Lists of elements can be rendered using JavaScript array methods such as map.',

    'React is useful for applications where the interface changes frequently based on user actions or fetched data.',

    'In the Healthcare Vitals Tracker, React can be used to build the login form, vitals form, history list and protected dashboard.'
  ],

  technical: [
    'React follows a declarative approach. Developers describe what the interface should look like for the current state, and React handles updating the DOM.',

    'A functional component is a JavaScript or TypeScript function that returns JSX.',

    'JSX is transformed into JavaScript before the browser executes the application.',

    'Props are read-only inputs received by a component.',

    'State is private data managed by a component and can trigger a re-render when updated.',

    'The useState hook returns the current state value and a function used to update it.',

    'State updates should be treated as immutable. Arrays and objects should normally be replaced with updated copies instead of being mutated directly.',

    'The useEffect hook runs side-effect logic after React commits an update to the interface.',

    'The dependency array controls when an effect runs.',

    'An empty dependency array normally causes an effect to run after the initial mount.',

    'An effect can return a cleanup function for removing listeners, cancelling subscriptions or cleaning up timers.',

    'Controlled components store form values in React state and update them through event handlers.',

    'Uncontrolled components allow the DOM to store form values and are commonly accessed using refs.',

    'Lifting state up means moving shared state to the nearest common parent so multiple child components can use the same source of truth.',

    'Prop drilling occurs when props are passed through several intermediate components that do not directly need them.',

    'Context can share values across a component tree without manually passing props through every level.',

    'React uses reconciliation to compare the previous element tree with the new one and determine which DOM updates are required.',

    'Keys help React identify list items between renders. Stable unique identifiers should normally be used instead of array indexes.',

    'The virtual DOM is an in-memory representation used during React rendering. React still updates the real DOM when necessary.',

    'Memoisation tools such as React.memo, useMemo and useCallback can reduce unnecessary work, but they should be used only when they solve a measurable problem.',

    'Error boundaries catch certain rendering errors in descendant components. They do not catch every possible asynchronous or event-handler error.',

    'In TypeScript, component props, state and event handlers can be given explicit types.',

    'React manages the frontend interface. Authentication rules, database access and security must still be enforced by the backend.'
  ],

  interview:
    'React is a component-based JavaScript library used to build interactive user interfaces. In the Healthcare Vitals Tracker, I used React to separate the application into reusable parts such as authentication, the vitals-entry form and reading history. I used state to manage form values and fetched records, props to pass data between components and effects for operations such as loading user data. React helped keep the interface modular and made updates easier when application state changed.',

  keyPoints: [
    'Components',
    'JSX',
    'Props',
    'State',
    'Hooks',
    'useState',
    'useEffect',
    'Controlled forms',
    'Conditional rendering',
    'List keys',
    'Context',
    'Reconciliation'
  ],

  code: `import { useEffect, useState } from 'react';

type VitalReading = {
  id: string;
  systolic: number;
  diastolic: number;
  measuredAt: string;
};

type ReadingCardProps = {
  reading: VitalReading;
};

function ReadingCard({
  reading
}: ReadingCardProps) {
  return (
    <article>
      <h3>
        {reading.systolic}/
        {reading.diastolic}
      </h3>

      <p>{reading.measuredAt}</p>
    </article>
  );
}

export default function VitalsHistory() {
  const [readings, setReadings] =
    useState<VitalReading[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadReadings() {
      try {
        const response =
          await fetch('/api/readings');

        if (!response.ok) {
          throw new Error(
            'Unable to fetch readings'
          );
        }

        const data: VitalReading[] =
          await response.json();

        setReadings(data);
      } finally {
        setLoading(false);
      }
    }

    loadReadings();
  }, []);

  if (loading) {
    return <p>Loading readings...</p>;
  }

  return (
    <section>
      <h2>Vitals history</h2>

      {readings.length === 0 ? (
        <p>No readings recorded.</p>
      ) : (
        readings.map((reading) => (
          <ReadingCard
            key={reading.id}
            reading={reading}
          />
        ))
      )}
    </section>
  );
}`,

  followUps: [
    'What is a React component?',
    'What is JSX?',
    'Props versus state?',
    'What does useState do?',
    'What does useEffect do?',
    'Why are keys required in lists?',
    'What is a controlled component?',
    'What is lifting state up?',
    'What is prop drilling?',
    'How does React update the DOM?'
  ],

  cautions: [
    'Do not say React is a complete backend framework. It mainly manages the user interface.',

    'Do not mutate React state directly.',

    'Do not use useEffect for every calculation. Values derived directly from props or state can often be calculated during rendering.',

    'Do not use array indexes as keys when list order can change.',

    'The virtual DOM does not mean React never touches the real DOM.',

    'Only claim hooks or architectural patterns that actually exist in your project.'
  ],

  qa: [
    {
      question: '1. What is React?',
      answer:
        'React is a JavaScript library used to build component-based and interactive user interfaces.'
    },

    {
      question: '2. What is a component?',
      answer:
        'A component is a reusable unit of interface and behaviour. It can represent a button, form, card, page section or complete screen.'
    },

    {
      question: '3. What is JSX?',
      answer:
        'JSX is a syntax that allows HTML-like markup to be written inside JavaScript or TypeScript. It is transformed into JavaScript before execution.'
    },

    {
      question: '4. What are props?',
      answer:
        'Props are read-only values passed from a parent component to a child component.'
    },

    {
      question: '5. What is state?',
      answer:
        'State is data managed by a component that can change over time and cause the interface to re-render.'
    },

    {
      question: '6. Props versus state?',
      answer:
        'Props are inputs received from a parent. State is managed by the component itself or by a state-management layer.'
    },

    {
      question: '7. What does useState do?',
      answer:
        'useState adds state to a functional component and returns the current value and a state-update function.'
    },

    {
      question: '8. What does useEffect do?',
      answer:
        'useEffect runs side-effect logic after rendering, such as data fetching, subscriptions, event listeners or timer management.'
    },

    {
      question: '9. What is a controlled component?',
      answer:
        'A controlled form element gets its value from React state and updates that state through an event handler.'
    },

    {
      question: '10. Why are keys needed in lists?',
      answer:
        'Keys help React identify which items were added, removed or changed between renders.'
    },

    {
      question: '11. What is conditional rendering?',
      answer:
        'Conditional rendering means displaying different elements depending on conditions such as loading state, authentication or available data.'
    },

    {
      question: '12. What is lifting state up?',
      answer:
        'It means moving shared state to the nearest common parent so several components use one consistent source of truth.'
    },

    {
      question: '13. What is prop drilling?',
      answer:
        'Prop drilling occurs when values are passed through several intermediate components only to reach a deeply nested component.'
    },

    {
      question: '14. What is React Context?',
      answer:
        'Context allows a value to be shared across part of the component tree without passing it manually through every component.'
    },

    {
      question: '15. How did you use React in your project?',
      answer:
        'I used React to create reusable authentication, form and history components. State controlled form values and displayed readings, while effects supported loading data and maintaining application state.'
    }
  ]
},
  {
  id: 'vite',
  title: 'Vite',
  category: 'frontend',

  short:
    'A fast development server and frontend build tool commonly used with React and TypeScript.',

  simple: [
    'Vite is a development and build tool for modern frontend applications.',

    'It is commonly used to create React, TypeScript and JavaScript projects.',

    'Vite provides a local development server.',

    'The development server allows developers to view changes quickly while coding.',

    'Hot Module Replacement updates changed modules without refreshing the entire page.',

    'Vite processes JavaScript, TypeScript, CSS and imported assets.',

    'For production, Vite creates optimised static files.',

    'The production files are usually generated inside a dist folder.',

    'React and Vite are not alternatives.',

    'React is used to build the user interface, while Vite runs and builds the project.',

    'Vite can read environment variables that use the configured public prefix.',

    'The package.json file defines commands such as npm run dev and npm run build.',

    'Vite does not automatically replace all TypeScript type checking.',

    'A project may run locally with Vite but fail during a production build if a separate TypeScript check reports an error.'
  ],

  technical: [
    'Vite provides an on-demand development server that serves source modules during development.',

    'It uses native ES modules in modern browsers for fast development startup.',

    'Hot Module Replacement updates changed modules while attempting to preserve application state.',

    'The development command is commonly defined as vite in package.json.',

    'The production command is commonly vite build.',

    'The preview command commonly serves the generated production build locally for testing.',

    'The production build normally generates files inside the dist directory.',

    'Vite can process TypeScript syntax, but syntax transformation is not the same as complete type checking.',

    'A build script may run tsc --noEmit before vite build to ensure TypeScript errors stop deployment.',

    'Vite configuration is normally stored in vite.config.ts or vite.config.js.',

    'Plugins extend Vite behaviour. React projects commonly use the official React plugin.',

    'Environment variables exposed to frontend code should not contain private secrets because frontend values are included in browser-delivered code.',

    'Vite supports static asset imports and files placed in the public directory.',

    'Files in public are copied without transformation and are served from the application root.',

    'Imported assets may receive hashed filenames during the production build for cache management.',

    'A deployment platform must publish the generated dist folder for a normal static Vite application.',

    'When a project is inside a nested repository folder, the deployment root directory must point to the folder containing package.json.',

    'Vite does not provide a database, authentication system or production server-side API by itself.'
  ],

  interview:
    'Vite is the development and build tool I used for the React and TypeScript project. During development, it provided a fast local server and Hot Module Replacement so changes appeared quickly. For production, Vite bundled the application and generated optimised files in the dist directory. I also learned that Vite can transform TypeScript, but a separate TypeScript check may still be required before deployment.',

  keyPoints: [
    'Development server',
    'Hot Module Replacement',
    'Production build',
    'dist directory',
    'ES modules',
    'Plugins',
    'Environment variables',
    'Static assets',
    'Vite configuration',
    'TypeScript build checks'
  ],

  code: `// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});

/*
package.json scripts:

{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  }
}
*/`,

  followUps: [
    'What is Vite?',
    'React versus Vite?',
    'What is Hot Module Replacement?',
    'What does npm run dev do?',
    'What does npm run build do?',
    'What is the dist folder?',
    'Why can localhost work while the build fails?',
    'What is vite.config.ts?',
    'How are environment variables handled?',
    'What is the public folder?'
  ],

  cautions: [
    'Do not describe Vite as a frontend framework.',

    'Do not say Vite is React. Vite can be used with multiple frontend technologies.',

    'Do not store private backend secrets in frontend environment variables.',

    'A working development server does not guarantee that the production TypeScript build will pass.',

    'Do not deploy src or public as the production output directory. A normal Vite build publishes dist.'
  ],

  qa: [
    {
      question: '1. What is Vite?',
      answer:
        'Vite is a frontend development server and build tool designed for modern JavaScript and TypeScript applications.'
    },

    {
      question: '2. Why did you use Vite?',
      answer:
        'I used Vite because it provides fast project startup, quick module updates and a straightforward production build process.'
    },

    {
      question: '3. React versus Vite?',
      answer:
        'React builds the user interface. Vite provides the development server and production build system.'
    },

    {
      question: '4. What is Hot Module Replacement?',
      answer:
        'HMR updates a changed module in the browser without performing a complete page reload.'
    },

    {
      question: '5. What does npm run dev do?',
      answer:
        'It runs the development script defined in package.json, which normally starts the Vite development server.'
    },

    {
      question: '6. What does npm run build do?',
      answer:
        'It runs the production build script. In this project it first checks TypeScript and then asks Vite to generate production assets.'
    },

    {
      question: '7. What is the dist folder?',
      answer:
        'dist contains the optimised production files created by Vite and is the folder normally published during deployment.'
    },

    {
      question: '8. Why can localhost work while deployment fails?',
      answer:
        'The development server can display transformed code without running the same complete TypeScript build checks used during deployment.'
    },

    {
      question: '9. What is vite.config.ts?',
      answer:
        'It is the project configuration file used to define plugins, aliases, build behaviour and other Vite settings.'
    },

    {
      question: '10. What is the public folder?',
      answer:
        'It stores static files that should be served directly and copied to the production output without normal module transformation.'
    },

    {
      question: '11. Does Vite type-check TypeScript?',
      answer:
        'Vite transforms TypeScript syntax, but projects commonly run tsc separately for complete type checking.'
    },

    {
      question: '12. How did you deploy the Vite project?',
      answer:
        'I configured the deployment root to the folder containing package.json, used npm run build as the build command and published the dist output folder.'
    }
  ]
},
  {
  id: 'bootstrap',
  title: 'Bootstrap',
  category: 'frontend',

  short:
    'A CSS framework providing responsive layouts, utility classes and reusable interface components.',

  simple: [
    'Bootstrap is a frontend CSS framework.',

    'It provides predefined CSS classes for layout, spacing, typography, forms, buttons and common interface components.',

    'Bootstrap includes a responsive grid system.',

    'The grid system divides a row into twelve conceptual columns.',

    'Classes such as container, row and col are used to create responsive layouts.',

    'Breakpoint classes allow layouts to change across mobile, tablet and desktop widths.',

    'Bootstrap follows a mobile-first approach.',

    'Utility classes can control margin, padding, display, alignment, colours and sizing.',

    'Bootstrap components include buttons, cards, navigation bars, alerts, modals and forms.',

    'Some interactive Bootstrap components require JavaScript.',

    'Bootstrap helps developers create responsive interfaces quickly.',

    'Default Bootstrap styling can look generic if it is not customised.',

    'Custom CSS can be combined with Bootstrap classes.',

    'In Puzzle Grove, Bootstrap can be used for layout, spacing, responsive navigation and form controls.'
  ],

  technical: [
    'Bootstrap provides a grid system based on containers, rows and columns.',

    'A container controls the horizontal width and alignment of page content.',

    'A row groups columns and manages grid spacing.',

    'Column classes define how much horizontal space an item occupies at a breakpoint.',

    'A class such as col-md-6 commonly creates a half-width column from the medium breakpoint onward.',

    'Without a breakpoint prefix, a class applies from the smallest screen size upward.',

    'Bootstrap uses mobile-first min-width breakpoints.',

    'Responsive utility classes can change display, spacing and alignment at different breakpoints.',

    'Spacing utilities follow patterns such as m for margin, p for padding, t for top, b for bottom, x for horizontal and y for vertical.',

    'Flexbox utilities support alignment using classes such as d-flex, justify-content-center and align-items-center.',

    'Bootstrap forms provide consistent styles for inputs, labels and validation states.',

    'Bootstrap components rely on CSS classes and, for interactive behaviour, Bootstrap JavaScript.',

    'The Bootstrap bundle includes required JavaScript dependencies for supported interactive components.',

    'Data attributes can configure components such as modals and collapsible navigation.',

    'Bootstrap variables and Sass configuration can be customised in projects that use its Sass source.',

    'Utility classes are useful for common patterns, while custom CSS is appropriate for unique product styling.',

    'Using too many framework-specific classes can make markup verbose and create dependency on the framework.',

    'Accessibility still requires correct HTML structure, labels, keyboard handling and meaningful content.'
  ],

  interview:
    'Bootstrap is a CSS framework that provides a responsive grid, utility classes and reusable components. I used it in Puzzle Grove to develop the mobile-first layout quickly, especially for spacing, columns, forms and responsive navigation. I combined Bootstrap with custom CSS because the framework helped with structure, while custom styles handled the game-specific visual design.',

  keyPoints: [
    'Grid system',
    'Containers',
    'Rows and columns',
    'Breakpoints',
    'Mobile-first',
    'Utility classes',
    'Forms',
    'Components',
    'Responsive navigation',
    'Custom CSS'
  ],

  code: `<div class="container py-4">
  <header
    class="d-flex flex-column
           flex-md-row
           justify-content-between
           align-items-md-center
           gap-3 mb-4"
  >
    <div>
      <h1 class="mb-1">
        Puzzle Grove
      </h1>

      <p class="text-secondary mb-0">
        Choose a game to begin.
      </p>
    </div>

    <button
      type="button"
      class="btn btn-primary"
    >
      View progress
    </button>
  </header>

  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <article class="card h-100">
        <div class="card-body">
          <h2 class="card-title h5">
            Word Puzzle
          </h2>

          <p class="card-text">
            Guess the correct word.
          </p>

          <button
            type="button"
            class="btn btn-outline-primary"
          >
            Play game
          </button>
        </div>
      </article>
    </div>
  </div>
</div>`,

  followUps: [
    'What is Bootstrap?',
    'What is the Bootstrap grid?',
    'What are containers, rows and columns?',
    'What are breakpoints?',
    'What does mobile-first mean in Bootstrap?',
    'What are utility classes?',
    'What does col-md-6 mean?',
    'Does Bootstrap require JavaScript?',
    'What are Bootstrap limitations?',
    'Bootstrap versus custom CSS?'
  ],

  cautions: [
    'Do not describe Bootstrap as a programming language.',

    'Bootstrap does not remove the need to understand CSS.',

    'Do not rely only on Bootstrap classes for accessibility.',

    'Interactive components may require Bootstrap JavaScript.',

    'Default Bootstrap interfaces can look generic without customisation.',

    'Do not say the grid physically creates twelve columns in every layout. It is a responsive sizing system.'
  ],

  qa: [
    {
      question: '1. What is Bootstrap?',
      answer:
        'Bootstrap is a CSS framework that provides responsive layouts, utility classes and reusable user-interface components.'
    },

    {
      question: '2. Why did you use Bootstrap?',
      answer:
        'I used it to build responsive layouts more quickly and maintain consistent spacing, forms, buttons and navigation.'
    },

    {
      question: '3. What is the Bootstrap grid system?',
      answer:
        'It is a responsive layout system based on containers, rows and columns, commonly organised around twelve column units.'
    },

    {
      question: '4. What is a container?',
      answer:
        'A container wraps page content and provides responsive width and horizontal spacing.'
    },

    {
      question: '5. What is a row?',
      answer:
        'A row groups columns and handles the spacing and alignment required by the grid.'
    },

    {
      question: '6. What does col-md-6 mean?',
      answer:
        'It means the column should occupy six of twelve grid units from the medium breakpoint onward.'
    },

    {
      question: '7. What are breakpoints?',
      answer:
        'Breakpoints are viewport-width ranges at which responsive classes begin applying.'
    },

    {
      question: '8. What does mobile-first mean in Bootstrap?',
      answer:
        'Base classes apply to smaller screens first, and breakpoint-prefixed classes enhance the layout for wider screens.'
    },

    {
      question: '9. What are utility classes?',
      answer:
        'Utility classes perform common styling tasks such as spacing, display, colour, alignment and sizing.'
    },

    {
      question: '10. Does Bootstrap require JavaScript?',
      answer:
        'The grid and most styling do not. Interactive components such as modals, dropdowns and collapsible navigation normally require Bootstrap JavaScript.'
    },

    {
      question: '11. Bootstrap versus custom CSS?',
      answer:
        'Bootstrap provides a fast, consistent foundation. Custom CSS is used for unique branding, specialised layouts and product-specific interaction states.'
    },

    {
      question: '12. What is one limitation of Bootstrap?',
      answer:
        'Interfaces can look generic, and heavy reliance on utility classes can create verbose markup or make the application dependent on the framework.'
    },

    {
      question: '13. How did you use Bootstrap in Puzzle Grove?',
      answer:
        'I used Bootstrap for the responsive grid, spacing utilities, buttons, forms and navigation, then added custom CSS for game boards and visual identity.'
    }
  ]
},
 {
  id: 'responsive-web-design',
  title: 'Responsive Web Design',
  category: 'frontend',

  short:
    'An approach that allows interfaces to adapt across mobile, tablet, laptop and desktop screens.',

  simple: [
    'Responsive web design means creating a website that works across different screen sizes and devices.',

    'A responsive layout should remain readable and usable on mobile phones, tablets, laptops and desktops.',

    'Responsive design does not mean shrinking a desktop page until it fits on a phone.',

    'The layout, spacing, typography and navigation may change depending on available screen space.',

    'Flexible widths allow elements to grow and shrink.',

    'Media queries apply CSS rules when conditions such as viewport width are met.',

    'Flexbox and Grid help create flexible layouts.',

    'Responsive images should resize without overflowing their containers.',

    'The viewport meta tag is required for correct mobile scaling.',

    'A mobile-first approach begins with styles for smaller screens.',

    'Additional styles are added for larger screens using min-width media queries.',

    'Touch targets should be large enough to use comfortably.',

    'Text should remain readable without horizontal scrolling.',

    'Navigation may change from a horizontal menu to a compact mobile menu.',

    'Responsive design should consider accessibility, orientation, content priority and user preferences.'
  ],

  technical: [
    'Responsive design combines flexible layouts, responsive media, media queries and adaptable typography.',

    'The viewport meta tag commonly sets the layout viewport width to the device width.',

    'Fluid layouts use flexible measurements such as percentages, fractions, minmax and relative units.',

    'A maximum width can prevent content from becoming excessively wide on large screens.',

    'The CSS min function, max function and clamp function can create responsive sizes with controlled limits.',

    'Mobile-first CSS defines the base experience for smaller screens and uses min-width queries for wider layouts.',

    'Desktop-first CSS commonly starts with large-screen styles and uses max-width queries to reduce the layout.',

    'Mobile-first design often produces simpler base styles and progressive enhancement.',

    'Breakpoints should be selected according to content behaviour rather than only targeting specific device brands.',

    'Flexbox is useful for navigation, alignment and component-level layouts.',

    'CSS Grid is useful for responsive card grids, dashboards and two-dimensional arrangements.',

    'The repeat, auto-fit, auto-fill and minmax functions can create responsive grids with fewer media queries.',

    'Images can use max-width: 100% and height: auto to remain inside their containers.',

    'The picture element and srcset attribute allow different image sources or sizes to be selected.',

    'Responsive typography can use rem units and clamp to scale between minimum and maximum values.',

    'Horizontal scrolling should generally be avoided for primary page content.',

    'Content should reflow when the viewport narrows or text is enlarged.',

    'Touch targets should provide sufficient size and spacing for users on mobile devices.',

    'Hover-only interactions are unsuitable as the only method of accessing important actions.',

    'A responsive interface should be tested with keyboard navigation and screen zoom.',

    'Real-device testing can reveal problems that are not obvious in a desktop browser simulator.',

    'Responsive design should also consider reduced-motion preferences, dark mode and different input methods.',

    'Performance matters on mobile devices, so large images, unnecessary scripts and heavy animation should be reduced.',

    'In Puzzle Grove, a game board can move from multiple columns on desktop to a single-column or compact layout on mobile.'
  ],

  interview:
    'Responsive web design is the practice of creating interfaces that adapt to different screen sizes and input methods. I use flexible widths, media queries, Flexbox, CSS Grid and responsive images. In Puzzle Grove, I followed a mobile-first approach so the game interface worked on smaller screens first, then used breakpoints to improve the layout for tablets and desktops. I also considered readable text, touch-friendly buttons and avoiding horizontal scrolling.',

  keyPoints: [
    'Mobile-first design',
    'Viewport meta tag',
    'Flexible layouts',
    'Media queries',
    'Breakpoints',
    'Flexbox',
    'CSS Grid',
    'Responsive images',
    'Relative units',
    'Touch targets',
    'Content reflow',
    'Accessibility'
  ],

  code: `.page {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}

.game-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.game-card {
  min-width: 0;
  padding: 1rem;
}

.game-card img {
  display: block;
  max-width: 100%;
  height: auto;
}

.page-title {
  font-size: clamp(
    1.8rem,
    4vw,
    3.5rem
  );
}

.action-button {
  min-height: 44px;
  padding: 0.75rem 1rem;
}

@media (min-width: 48rem) {
  .game-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .game-grid {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }
}`,

  followUps: [
    'What is responsive web design?',
    'What is mobile-first design?',
    'What is the viewport meta tag?',
    'What are media queries?',
    'How do you choose breakpoints?',
    'What are responsive images?',
    'What units do you use for responsive layouts?',
    'How do Flexbox and Grid help?',
    'How do you test responsiveness?',
    'What accessibility issues exist on mobile?'
  ],

  cautions: [
    'Responsive design is not just reducing element sizes.',

    'Do not select breakpoints only by popular device names. Let the content determine when the layout should change.',

    'Do not rely only on hover interactions.',

    'Avoid fixed widths that cause horizontal scrolling on smaller screens.',

    'Browser developer tools are useful, but real-device testing is still valuable.',

    'Do not hide essential content merely to make a mobile layout appear cleaner.'
  ],

  qa: [
    {
      question: '1. What is responsive web design?',
      answer:
        'Responsive web design creates interfaces that adapt to different viewport sizes, devices and input methods.'
    },

    {
      question: '2. What is mobile-first design?',
      answer:
        'Mobile-first design begins with the smaller-screen experience and adds layout enhancements for wider screens.'
    },

    {
      question: '3. Why use mobile-first design?',
      answer:
        'It encourages content prioritisation, simpler base styles and progressive enhancement for devices with more screen space.'
    },

    {
      question: '4. What is the viewport meta tag?',
      answer:
        'It tells mobile browsers how to size and scale the layout viewport. A common setting matches the viewport width to the device width.'
    },

    {
      question: '5. What are media queries?',
      answer:
        'Media queries apply CSS rules only when conditions such as viewport width, orientation or user preferences are met.'
    },

    {
      question: '6. How do you choose breakpoints?',
      answer:
        'I choose breakpoints when the content or layout stops working comfortably, rather than selecting them only for particular devices.'
    },

    {
      question: '7. What is a fluid layout?',
      answer:
        'A fluid layout uses flexible measurements so elements can grow and shrink with the available space.'
    },

    {
      question: '8. How do you make images responsive?',
      answer:
        'I commonly use max-width: 100% and height: auto, and use srcset or picture when different source sizes are needed.'
    },

    {
      question: '9. Why use rem instead of only pixels?',
      answer:
        'rem is relative to the root font size and can support scalable typography and spacing.'
    },

    {
      question: '10. How does Flexbox help responsive design?',
      answer:
        'Flexbox can change direction, alignment, wrapping and spacing as the available width changes.'
    },

    {
      question: '11. How does Grid help responsive design?',
      answer:
        'Grid supports flexible rows and columns and can create responsive card layouts using minmax, auto-fit and fractional units.'
    },

    {
      question: '12. How do you test responsiveness?',
      answer:
        'I test multiple viewport sizes, browser zoom, keyboard navigation, orientation changes and, where possible, real mobile devices.'
    },

    {
      question: '13. What is content reflow?',
      answer:
        'Content reflow means the layout rearranges so users can read and operate it without unnecessary two-dimensional scrolling.'
    },

    {
      question: '14. How did you make Puzzle Grove responsive?',
      answer:
        'I used a mobile-first layout, Bootstrap breakpoints, Grid for game boards and Flexbox for alignment. Wider screens received additional columns while mobile screens kept a simpler layout.'
    }
  ]
},
  {
  id: 'nodejs',
  title: 'Node.js',
  category: 'backend',

  short:
    'A JavaScript runtime used to execute JavaScript outside the browser, commonly for servers, APIs and development tools.',

  simple: [
    'Node.js is a JavaScript runtime environment.',

    'It allows JavaScript to run outside a web browser.',

    'Node.js is commonly used to create backend servers, REST APIs, command-line tools and automation scripts.',

    'Node.js uses the V8 JavaScript engine, which is also used by Chromium-based browsers.',

    'Node.js is not a programming language. JavaScript is the language, while Node.js is the runtime that executes it.',

    'Node.js follows an event-driven and non-blocking approach for many input and output operations.',

    'This makes Node.js suitable for applications that handle many API requests, database operations or network connections.',

    'The npm package manager is commonly used with Node.js to install third-party libraries.',

    'The package.json file stores project metadata, dependencies and scripts.',

    'Node.js provides built-in modules for tasks such as file handling, HTTP servers, paths and operating-system information.',

    'Node.js is useful when developers want to use JavaScript for both frontend and backend development.',

    'In my resume, Node.js is listed as a backend skill, but the Healthcare Vitals Tracker primarily uses Supabase as its backend service.'
  ],

  technical: [
    'Node.js executes JavaScript using the V8 engine.',

    'Node.js uses an event loop to coordinate asynchronous tasks.',

    'Many input and output operations are non-blocking, meaning the application does not need to wait idly for one operation to finish before accepting other work.',

    'Examples of input and output operations include reading files, making network requests and querying databases.',

    'JavaScript code itself normally runs on one main event-loop thread, while Node.js can use operating-system facilities and a worker pool for some background operations.',

    'A callback is a function that runs after an asynchronous operation completes.',

    'Promises provide a structured way to represent asynchronous success or failure.',

    'async and await provide more readable syntax for working with promises.',

    'Node.js supports CommonJS modules using require and module.exports.',

    'Modern Node.js also supports ES modules using import and export.',

    'The package.json file can define whether the project uses CommonJS or ES modules.',

    'npm stands for Node Package Manager and is used to install packages and run scripts.',

    'The node_modules folder contains installed project dependencies.',

    'The package-lock.json file records resolved dependency versions to improve repeatable installations.',

    'Environment variables are commonly used to store configuration such as database URLs and API keys.',

    'Private secrets should not be committed to GitHub.',

    'The built-in http module can create a web server without an external framework.',

    'Frameworks such as Express can simplify routing and middleware, but Express is separate from Node.js.',

    'Middleware is code that runs during request processing before the final route handler returns a response.',

    'Node.js is well suited for I/O-heavy applications, but CPU-intensive work can block the event loop if it is performed directly on the main thread.',

    'Worker threads or separate processes can be used for CPU-heavy operations.',

    'Errors in asynchronous code should be caught and handled so the server does not return unclear failures or terminate unexpectedly.'
  ],

  interview:
    'Node.js is a JavaScript runtime that allows JavaScript to run outside the browser. It is commonly used for backend servers and REST APIs. Its event-driven and non-blocking input-output model makes it suitable for handling multiple network or database operations efficiently. I have studied Node.js for backend and API development, although my Healthcare Vitals Tracker currently uses Supabase as its main backend service.',

  keyPoints: [
    'JavaScript runtime',
    'V8 engine',
    'Event loop',
    'Non-blocking I/O',
    'Promises',
    'async and await',
    'npm',
    'package.json',
    'Modules',
    'HTTP server',
    'Environment variables'
  ],

  code: `import http from 'node:http';

const server = http.createServer(
  (request, response) => {
    if (
      request.method === 'GET' &&
      request.url === '/api/health'
    ) {
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });

      response.end(
        JSON.stringify({
          status: 'ok',
          message: 'Server is running'
        })
      );

      return;
    }

    response.writeHead(404, {
      'Content-Type': 'application/json'
    });

    response.end(
      JSON.stringify({
        error: 'Route not found'
      })
    );
  }
);

server.listen(3000, () => {
  console.log(
    'Server running on http://localhost:3000'
  );
});`,

  followUps: [
    'What is Node.js?',
    'Is Node.js a programming language?',
    'What is the event loop?',
    'What does non-blocking I/O mean?',
    'What is npm?',
    'What is package.json?',
    'What is the difference between CommonJS and ES modules?',
    'Why is Node.js good for APIs?',
    'When may Node.js be a poor choice?',
    'Where did you use Node.js?'
  ],

  cautions: [
    'Do not describe Node.js as a programming language.',

    'Do not say Node.js is automatically multithreaded for all JavaScript execution.',

    'Do not claim that Supabase is a Node.js backend you personally built.',

    'Do not expose private API keys or database passwords in frontend code.',

    'Do not claim production Node.js experience if your use was limited to learning or small backend exercises.'
  ],

  qa: [
    {
      question: '1. What is Node.js?',
      answer:
        'Node.js is a runtime environment that allows JavaScript to execute outside the browser. It is commonly used for servers, APIs, scripts and development tools.'
    },

    {
      question: '2. Is Node.js a programming language?',
      answer:
        'No. JavaScript is the programming language. Node.js is a runtime environment used to execute JavaScript.'
    },

    {
      question: '3. What is the V8 engine?',
      answer:
        'V8 is the JavaScript engine that compiles and executes JavaScript. Node.js uses V8 to run JavaScript outside the browser.'
    },

    {
      question: '4. What is the event loop?',
      answer:
        'The event loop coordinates asynchronous tasks and schedules callbacks when the main JavaScript call stack is available.'
    },

    {
      question: '5. What does non-blocking I/O mean?',
      answer:
        'It means Node.js can start an input-output operation and continue handling other work instead of waiting for that operation to complete.'
    },

    {
      question: '6. Why is Node.js suitable for APIs?',
      answer:
        'APIs often spend time waiting for database or network operations. Node.js can handle these I/O operations efficiently without blocking the server during each wait.'
    },

    {
      question: '7. What is npm?',
      answer:
        'npm is the package manager commonly used with Node.js. It installs dependencies and runs scripts defined in package.json.'
    },

    {
      question: '8. What is package.json?',
      answer:
        'package.json stores project information, scripts, dependencies, version details and configuration such as module type.'
    },

    {
      question: '9. What is package-lock.json?',
      answer:
        'It records the exact dependency versions installed so other developers and deployment systems can reproduce the same dependency tree.'
    },

    {
      question: '10. What is the difference between CommonJS and ES modules?',
      answer:
        'CommonJS commonly uses require and module.exports. ES modules use import and export and are the modern JavaScript module standard.'
    },

    {
      question: '11. What are environment variables?',
      answer:
        'Environment variables provide configuration values outside the source code, such as ports, database URLs and private credentials.'
    },

    {
      question: '12. When may Node.js be less suitable?',
      answer:
        'CPU-heavy calculations can block the event loop if they run on the main thread. Such work may require worker threads, separate services or another architecture.'
    },

    {
      question: '13. Where did you use Node.js?',
      answer:
        'I have used Node.js while learning backend and REST API concepts. My Healthcare Vitals Tracker uses Supabase as its primary backend, so I would not describe that project as a custom Node.js backend.'
    }
  ]
},
  {
  id: 'rest-apis',
  title: 'REST APIs',
  category: 'backend',

  short:
    'A resource-oriented approach for communication between clients and servers using HTTP.',

  simple: [
    'API stands for Application Programming Interface.',

    'An API allows two software systems to communicate with each other.',

    'In a web application, the frontend can send a request to the backend through an API.',

    'The backend processes the request, accesses required data and returns a response.',

    'REST stands for Representational State Transfer.',

    'REST is an architectural style commonly used to design web APIs.',

    'REST APIs organise functionality around resources such as users, readings, products or appointments.',

    'A resource is identified using a URL or endpoint.',

    'HTTP methods describe the operation being performed.',

    'GET retrieves data.',

    'POST creates new data.',

    'PUT generally replaces or fully updates a resource.',

    'PATCH partially updates a resource.',

    'DELETE removes a resource.',

    'REST API responses commonly use JSON.',

    'HTTP status codes communicate whether a request succeeded or failed.',

    'The Healthcare Vitals Tracker frontend communicates with Supabase through its client and generated API layer.'
  ],

  technical: [
    'REST treats application data as resources identified through URLs.',

    'An endpoint combines a server address with a path representing a resource or operation.',

    'A URL such as /api/readings can represent a collection of health readings.',

    'A URL such as /api/readings/123 can represent one specific reading.',

    'GET requests should retrieve data and should not normally modify server state.',

    'POST requests commonly create resources or trigger operations.',

    'PUT commonly replaces a complete resource representation.',

    'PATCH commonly updates selected fields of a resource.',

    'DELETE removes a resource.',

    'Request data can be sent through path parameters, query parameters, headers or a request body.',

    'Path parameters identify a particular resource, such as /readings/123.',

    'Query parameters filter, sort or paginate data, such as /readings?limit=10.',

    'Headers provide metadata such as content type, authorisation and accepted response formats.',

    'The request body commonly contains JSON when creating or updating data.',

    'The Content-Type header tells the server how the request body is formatted.',

    'The Authorization header commonly carries authentication credentials or tokens.',

    'A RESTful API should use meaningful resource names rather than unclear action-based paths.',

    'REST APIs are stateless, meaning each request should contain the information required to process it.',

    'Stateless does not mean the application cannot store data. It means the server should not depend on hidden conversational state between requests.',

    'Status code 200 normally indicates success.',

    'Status code 201 indicates that a resource was successfully created.',

    'Status code 204 indicates success without a response body.',

    'Status code 400 represents an invalid request.',

    'Status code 401 means authentication is required or invalid.',

    'Status code 403 means the user is authenticated but does not have permission.',

    'Status code 404 means the resource or route was not found.',

    'Status code 409 can represent a conflict such as a duplicate resource.',

    'Status code 500 represents an unexpected server-side error.',

    'Input should be validated on the backend even when the frontend has already validated it.',

    'Pagination prevents a large collection from being returned in one response.',

    'Rate limiting can protect APIs from excessive requests.',

    'API versioning can help maintain compatibility when response structures change.',

    'CORS controls whether a browser frontend from one origin may access a server on another origin.'
  ],

  interview:
    'A REST API allows the frontend and backend to communicate through HTTP. Resources are represented by endpoints, and operations are performed using methods such as GET, POST, PATCH and DELETE. The API returns a response body, commonly in JSON, along with an HTTP status code. In the Healthcare Vitals Tracker, the frontend sends requests through the Supabase client to create and retrieve user-specific health readings.',

  keyPoints: [
    'Resources',
    'Endpoints',
    'HTTP methods',
    'Request and response',
    'JSON',
    'Status codes',
    'Path parameters',
    'Query parameters',
    'Headers',
    'Statelessness',
    'Validation',
    'CORS'
  ],

  code: `// Retrieve all readings
GET /api/readings

// Retrieve one reading
GET /api/readings/123

// Create a reading
POST /api/readings
Content-Type: application/json

{
  "systolic": 120,
  "diastolic": 80,
  "measuredAt": "2026-07-30T10:30:00Z"
}

// Update part of a reading
PATCH /api/readings/123
Content-Type: application/json

{
  "systolic": 118
}

// Delete a reading
DELETE /api/readings/123


// Example frontend request

async function createReading() {
  const response = await fetch(
    '/api/readings',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        systolic: 120,
        diastolic: 80
      })
    }
  );

  if (!response.ok) {
    throw new Error(
      'Unable to create reading'
    );
  }

  return response.json();
}`,

  followUps: [
    'What is an API?',
    'What is REST?',
    'What is an endpoint?',
    'GET versus POST?',
    'PUT versus PATCH?',
    'What is a request body?',
    'What are HTTP status codes?',
    'What does stateless mean?',
    'What is CORS?',
    'How do you secure an API?'
  ],

  cautions: [
    'Do not describe REST as a programming language or library.',

    'Do not use GET requests to perform destructive actions.',

    'Do not confuse 401 and 403.',

    'Frontend validation does not replace backend validation.',

    'Do not assume every API response is successful. Always check the status or response.ok.',

    'Do not send passwords or sensitive information through URL query parameters.'
  ],

  qa: [
    {
      question: '1. What is an API?',
      answer:
        'An API is an interface that allows two software systems to exchange requests and responses.'
    },

    {
      question: '2. What is REST?',
      answer:
        'REST is an architectural style for designing network APIs around resources and standard HTTP behaviour.'
    },

    {
      question: '3. What is an endpoint?',
      answer:
        'An endpoint is a URL path through which a client accesses an API resource or operation.'
    },

    {
      question: '4. What is a resource?',
      answer:
        'A resource is an entity managed by the API, such as a user, reading, order or appointment.'
    },

    {
      question: '5. What does GET do?',
      answer:
        'GET retrieves a resource or collection and should not normally change server data.'
    },

    {
      question: '6. What does POST do?',
      answer:
        'POST commonly creates a resource or submits data for processing.'
    },

    {
      question: '7. PUT versus PATCH?',
      answer:
        'PUT commonly replaces a full resource representation, while PATCH updates selected fields.'
    },

    {
      question: '8. What does DELETE do?',
      answer:
        'DELETE requests removal of a resource.'
    },

    {
      question: '9. What is JSON?',
      answer:
        'JSON is a text-based data format commonly used to exchange structured information between frontend and backend systems.'
    },

    {
      question: '10. What is the difference between path and query parameters?',
      answer:
        'A path parameter usually identifies a specific resource. Query parameters commonly filter, sort, search or paginate a collection.'
    },

    {
      question: '11. What is an HTTP header?',
      answer:
        'A header contains metadata about a request or response, such as content type, authorisation or caching instructions.'
    },

    {
      question: '12. What does stateless mean in REST?',
      answer:
        'Each request should contain the information needed to process it rather than relying on an undocumented conversation state stored between requests.'
    },

    {
      question: '13. What is the difference between 401 and 403?',
      answer:
        '401 means valid authentication is missing or failed. 403 means the user is authenticated but not authorised for the requested action.'
    },

    {
      question: '14. What is CORS?',
      answer:
        'CORS is a browser security mechanism that controls whether frontend code from one origin can access resources from another origin.'
    },

    {
      question: '15. How do you secure a REST API?',
      answer:
        'Use authentication, authorisation, HTTPS, backend validation, access-control rules, rate limiting and careful handling of secrets and error messages.'
    },

    {
      question: '16. How did you use APIs in your project?',
      answer:
        'The React frontend used the Supabase client and generated API layer to insert and retrieve authenticated users’ health records.'
    }
  ]
},
  {
  id: 'authentication',
  title: 'Authentication',
  category: 'backend',

  short:
    'The process of verifying the identity of a user before providing access to protected functionality.',

  simple: [
    'Authentication verifies who a user is.',

    'A common authentication method uses an email address and password.',

    'The user submits credentials through a login form.',

    'The authentication service verifies those credentials.',

    'If verification succeeds, the application creates or receives a session.',

    'The session allows the application to remember that the user is logged in.',

    'Protected pages should only be available to authenticated users.',

    'Authentication and authorisation are different concepts.',

    'Authentication answers: Who are you?',

    'Authorisation answers: What are you allowed to access?',

    'Passwords should not be stored as plain text.',

    'Passwords are normally processed using a secure password-hashing algorithm.',

    'Applications may use session-based or token-based authentication.',

    'Logging out should invalidate or remove the active session.',

    'In the Healthcare Vitals Tracker, users authenticate before viewing or managing their health records.'
  ],

  technical: [
    'Authentication proves a user identity using one or more factors.',

    'Common factors include something the user knows, owns or is.',

    'Password-based authentication uses something the user knows.',

    'Multi-factor authentication requires more than one type of factor.',

    'Passwords should be salted and processed using a suitable password-hashing algorithm.',

    'Hashing is a one-way transformation, while encryption is designed to be reversible with a key.',

    'A secure application should never store passwords as plain text.',

    'Session-based authentication commonly stores session information on the server and sends the browser a session identifier.',

    'Token-based authentication commonly gives the client a signed token that accompanies future requests.',

    'An access token is usually short-lived and is used to access protected resources.',

    'A refresh token can be used to obtain another access token without asking the user to log in again.',

    'A token is not automatically encrypted. Signed tokens protect integrity but their payload may still be readable.',

    'Cookies can store session identifiers and support flags such as HttpOnly, Secure and SameSite.',

    'HttpOnly helps prevent client-side JavaScript from directly reading a cookie.',

    'Secure restricts cookie transmission to HTTPS connections.',

    'SameSite helps reduce some cross-site request-forgery risks.',

    'Storing sensitive tokens in localStorage can expose them if the application has a cross-site scripting vulnerability.',

    'Protected frontend routes improve user experience but do not provide complete security by themselves.',

    'The backend must verify authentication and authorisation for every protected data request.',

    'Logging out should remove or invalidate credentials and clear user-specific application state.',

    'Password-reset flows should use short-lived, unpredictable links or codes.',

    'Login attempts may require rate limiting to reduce brute-force attacks.',

    'Error messages should avoid revealing whether a specific email account exists.',

    'HTTPS protects credentials and tokens while they travel between the client and server.',

    'Authentication identifies the user, while row-level or role-based policies determine which records that user may access.'
  ],

  interview:
    'Authentication verifies a user’s identity. In the Healthcare Vitals Tracker, users register or log in using email and password through Supabase Authentication. After successful verification, the application receives an authenticated session and allows the user to access protected features. Authentication identifies the user, while database policies and authorisation rules must ensure that the user can access only their own records.',

  keyPoints: [
    'Identity verification',
    'Email and password',
    'Password hashing',
    'Sessions',
    'Tokens',
    'Access tokens',
    'Refresh tokens',
    'Protected routes',
    'Logout',
    'Authentication versus authorisation',
    'HTTPS',
    'Security'
  ],

  code: `type AuthUser = {
  id: string;
  email: string;
};

type AuthState =
  | {
      status: 'loading';
      user: null;
    }
  | {
      status: 'authenticated';
      user: AuthUser;
    }
  | {
      status: 'unauthenticated';
      user: null;
    };

function canAccessDashboard(
  authState: AuthState
): boolean {
  return (
    authState.status ===
    'authenticated'
  );
}

/*
Typical login flow:

1. User submits email and password.
2. Authentication service verifies credentials.
3. Service returns a session or token.
4. Application stores the active session safely.
5. Protected requests include authentication.
6. Backend verifies identity and permissions.
7. Logout removes or invalidates the session.
*/`,

  followUps: [
    'What is authentication?',
    'Authentication versus authorisation?',
    'How should passwords be stored?',
    'Hashing versus encryption?',
    'Session versus token authentication?',
    'What is an access token?',
    'What is a refresh token?',
    'What is a protected route?',
    'What happens during logout?',
    'Why is backend validation required?'
  ],

  cautions: [
    'Do not say authentication automatically prevents users from accessing one another’s records.',

    'Do not claim you implemented password hashing when Supabase handled it.',

    'Do not store plain-text passwords.',

    'Do not treat frontend route protection as the only security layer.',

    'Do not say every token is encrypted.',

    'Do not expose private tokens or credentials in GitHub repositories.'
  ],

  qa: [
    {
      question: '1. What is authentication?',
      answer:
        'Authentication is the process of verifying the identity of a user or system.'
    },

    {
      question: '2. What is authorisation?',
      answer:
        'Authorisation decides which resources or actions an authenticated user is permitted to access.'
    },

    {
      question: '3. Authentication versus authorisation?',
      answer:
        'Authentication answers who the user is. Authorisation answers what that user is allowed to do.'
    },

    {
      question: '4. How should passwords be stored?',
      answer:
        'Passwords should be salted and processed through a secure password-hashing algorithm rather than stored as plain text.'
    },

    {
      question: '5. Hashing versus encryption?',
      answer:
        'Hashing is intended to be one-way. Encryption can be reversed using the correct key.'
    },

    {
      question: '6. What is a session?',
      answer:
        'A session represents an authenticated interaction and allows the application to recognise the user across requests.'
    },

    {
      question: '7. Session-based versus token-based authentication?',
      answer:
        'Session-based systems commonly store session state on the server. Token-based systems give the client a signed credential that is verified with requests.'
    },

    {
      question: '8. What is an access token?',
      answer:
        'An access token is a credential used to access protected APIs, commonly for a limited period.'
    },

    {
      question: '9. What is a refresh token?',
      answer:
        'A refresh token is used to request a new access token after the current access token expires.'
    },

    {
      question: '10. What is a protected route?',
      answer:
        'A protected route is a page or API endpoint that requires a valid authenticated session.'
    },

    {
      question: '11. Is hiding a page in React enough security?',
      answer:
        'No. The backend and database must also verify the user and enforce permissions because frontend checks can be bypassed.'
    },

    {
      question: '12. What happens during logout?',
      answer:
        'The active session or tokens should be removed or invalidated, and user-specific application data should be cleared.'
    },

    {
      question: '13. What is multi-factor authentication?',
      answer:
        'It requires more than one type of verification factor, such as a password plus a one-time code.'
    },

    {
      question: '14. How was authentication used in your project?',
      answer:
        'Supabase Authentication handled email registration, login and session management. The React application used the authenticated session to control access to the health dashboard.'
    }
  ]
},
  {
  id: 'supabase-authentication',
  title: 'Supabase Authentication',
  category: 'backend',

  short:
    'A managed authentication service that provides registration, login, logout and user-session handling.',

  simple: [
    'Supabase Authentication is a managed authentication service.',

    'It is part of the Supabase Backend-as-a-Service platform.',

    'It can support email and password registration and login.',

    'It can also support magic links, one-time passwords and social login providers.',

    'Supabase creates and manages authenticated users.',

    'After login, Supabase provides a user session.',

    'The session contains information that allows the application and Supabase services to identify the logged-in user.',

    'The React application can listen for authentication-state changes.',

    'Supabase provides functions for signing up, signing in and signing out.',

    'Supabase Authentication works with PostgreSQL access policies.',

    'The authenticated user ID can be linked to rows stored in the database.',

    'Row Level Security can restrict database rows according to the authenticated user.',

    'Using Supabase Authentication avoids implementing password storage and token generation manually.',

    'The frontend still needs loading states, error messages and protected navigation.',

    'In the Healthcare Vitals Tracker, Supabase Authentication handles email login and user-session management.'
  ],

  technical: [
    'Supabase Authentication manages user identities and authentication sessions.',

    'The auth.signUp function can register a user using email and password.',

    'The auth.signInWithPassword function authenticates an existing email-password user.',

    'The auth.signOut function removes the active session from the client and signs the user out.',

    'The auth.getSession function returns the current locally available session.',

    'The auth.getUser function can retrieve authenticated user information through Supabase authentication verification.',

    'The onAuthStateChange listener reports events such as sign in, sign out and token refresh.',

    'Supabase sessions include access and refresh credentials managed by the Supabase client.',

    'The authenticated user has a unique ID.',

    'That user ID can be stored in application-table rows as an ownership field.',

    'Supabase exposes the authenticated user ID to PostgreSQL policies through auth.uid().',

    'Row Level Security policies can compare auth.uid() with a row user_id field.',

    'A SELECT policy can allow users to read only rows they own.',

    'An INSERT policy can require the inserted user_id to match auth.uid().',

    'UPDATE and DELETE policies can similarly restrict changes to owned rows.',

    'Frontend filtering alone is not a reliable security boundary.',

    'Row Level Security should be enabled on tables containing user-specific data.',

    'The public Supabase anon key is designed for client applications when Row Level Security policies are correctly configured.',

    'The service-role key is highly privileged and must never be included in browser code or public repositories.',

    'Email confirmation may be enabled, requiring users to verify their email before normal access.',

    'Password-reset flows can be handled through Supabase recovery links.',

    'Authentication errors should be shown to users in a clear but safe way.',

    'Application code should handle initial session loading before deciding whether to show a protected page.',

    'Logging out should clear user-specific state such as cached readings.',

    'Supabase provides the authentication mechanism, but the developer must still configure database policies and application behaviour correctly.'
  ],

  interview:
    'Supabase Authentication is the managed authentication service I used in the Healthcare Vitals Tracker. It handled email-based registration, login, logout and session management. After login, the React application used the authenticated user information to load the appropriate health records. For secure user-specific access, each record should be associated with the authenticated user ID and protected using PostgreSQL Row Level Security policies based on auth.uid().',

  keyPoints: [
    'signUp',
    'signInWithPassword',
    'signOut',
    'Sessions',
    'Authenticated user',
    'Auth state listener',
    'User ID',
    'Row Level Security',
    'auth.uid()',
    'Email verification',
    'Password recovery',
    'Anon key security'
  ],

  code: `import {
  createClient
} from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL;

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  );

export async function signUp(
  email: string,
  password: string
) {
  const {
    data,
    error
  } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function signIn(
  email: string,
  password: string
) {
  const {
    data,
    error
  } =
    await supabase.auth
      .signInWithPassword({
        email,
        password
      });

  if (error) {
    throw error;
  }

  return data;
}

export async function signOut() {
  const {
    error
  } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}

/*
Example ownership policy idea:

Users may read a row only when:

auth.uid() = user_id
*/`,

  followUps: [
    'What is Supabase Authentication?',
    'How does signUp work?',
    'How does signInWithPassword work?',
    'What is a Supabase session?',
    'What is onAuthStateChange?',
    'How are records linked to users?',
    'What is Row Level Security?',
    'What does auth.uid() represent?',
    'Is the anon key safe in frontend code?',
    'Why must the service-role key remain private?'
  ],

  cautions: [
    'Only claim Row Level Security if you have enabled and configured it in the project.',

    'Do not include the Supabase service-role key in frontend code.',

    'Do not say frontend filtering secures database rows.',

    'Do not claim you implemented password hashing manually. Supabase Authentication manages credentials.',

    'Do not expose environment files containing private secrets in GitHub.',

    'The anon key is intended for client use only when database policies are configured correctly.'
  ],

  qa: [
    {
      question: '1. What is Supabase Authentication?',
      answer:
        'It is a managed authentication service that handles user registration, login, logout and session management.'
    },

    {
      question: '2. Why did you use Supabase Authentication?',
      answer:
        'It provided email authentication and session management without requiring me to build password storage and token handling from scratch.'
    },

    {
      question: '3. What does signUp do?',
      answer:
        'signUp creates a new Supabase authentication user using credentials such as email and password.'
    },

    {
      question: '4. What does signInWithPassword do?',
      answer:
        'It verifies an existing user’s email and password and returns authenticated user and session information when successful.'
    },

    {
      question: '5. What does signOut do?',
      answer:
        'It removes the current authenticated session and signs the user out.'
    },

    {
      question: '6. What is a Supabase session?',
      answer:
        'A session contains authentication information used to identify the active user and authorise Supabase requests.'
    },

    {
      question: '7. What is onAuthStateChange?',
      answer:
        'It is a listener that reports authentication events such as sign in, sign out and token refresh.'
    },

    {
      question: '8. How do you connect database rows to a user?',
      answer:
        'Store the authenticated user’s ID in an ownership column such as user_id.'
    },

    {
      question: '9. What is Row Level Security?',
      answer:
        'Row Level Security is a PostgreSQL feature that controls which individual rows a user may select, insert, update or delete.'
    },

    {
      question: '10. What does auth.uid() mean?',
      answer:
        'auth.uid() returns the ID of the currently authenticated Supabase user inside a PostgreSQL policy.'
    },

    {
      question: '11. How can users be restricted to their own rows?',
      answer:
        'Create Row Level Security policies that compare auth.uid() with the row user_id value.'
    },

    {
      question: '12. Is the Supabase anon key safe in the frontend?',
      answer:
        'It is designed for client-side use, but security depends on correctly configured Row Level Security policies. It is not a substitute for access control.'
    },

    {
      question: '13. What is the service-role key?',
      answer:
        'It is a privileged server-side key that can bypass normal Row Level Security. It must never be exposed in frontend code.'
    },

    {
      question: '14. How did you use Supabase Authentication in your project?',
      answer:
        'I used it for email registration, login, logout and maintaining the active user session in the Healthcare Vitals Tracker.'
    },

    {
      question: '15. What should happen when the user logs out?',
      answer:
        'The session should be removed, protected pages should become inaccessible and any cached user-specific readings should be cleared.'
    }
  ]
},
  {
  id: "sql",
  title: "SQL",
  category: "databases",

  short:
    "The language used to define, query, update and manage data stored in relational databases.",

  simple: [
    "SQL stands for Structured Query Language.",

    "SQL is used to communicate with relational database systems such as MySQL and PostgreSQL.",

    "It can create tables, insert records, retrieve data, update existing records and delete records.",

    "CRUD stands for Create, Read, Update and Delete.",

    "SELECT is used to retrieve data.",

    "INSERT is used to add new rows.",

    "UPDATE is used to modify existing rows.",

    "DELETE is used to remove rows.",

    "The WHERE clause filters records according to a condition.",

    "ORDER BY sorts query results.",

    "GROUP BY combines rows that share a value so aggregate functions can be applied.",

    "JOIN combines related data from multiple tables.",

    "Aggregate functions include COUNT, SUM, AVG, MIN and MAX.",

    "SQL is the language, while MySQL and PostgreSQL are database-management systems that understand SQL.",

    "In the Healthcare Vitals Tracker, SQL concepts are relevant because user and health-reading data are stored in relational PostgreSQL tables."
  ],

  technical: [
    "DDL stands for Data Definition Language and includes commands such as CREATE, ALTER and DROP.",

    "DML stands for Data Manipulation Language and commonly includes INSERT, UPDATE and DELETE.",

    "DQL is commonly used to describe SELECT queries.",

    "TCL includes transaction-related commands such as COMMIT and ROLLBACK.",

    "DCL includes permission-related commands such as GRANT and REVOKE.",

    "A SELECT query can choose specific columns instead of retrieving every column with SELECT *.",

    "The WHERE clause filters individual rows before grouping.",

    "The HAVING clause filters grouped results after GROUP BY.",

    "INNER JOIN returns rows that have matching values in both joined tables.",

    "LEFT JOIN returns every row from the left table and matching rows from the right table.",

    "RIGHT JOIN returns every row from the right table and matching rows from the left table.",

    "FULL OUTER JOIN returns matching rows and unmatched rows from both sides when supported by the database.",

    "A self join joins a table with itself using different aliases.",

    "A subquery is a query placed inside another query.",

    "A correlated subquery depends on values from the outer query and may be evaluated repeatedly.",

    "A Common Table Expression uses WITH to create a named temporary query result for one statement.",

    "UNION combines query results and removes duplicates.",

    "UNION ALL combines query results while retaining duplicates.",

    "DISTINCT removes duplicate combinations from the selected output columns.",

    "NULL represents an unknown or absent value and should normally be checked using IS NULL or IS NOT NULL.",

    "Comparing a value to NULL using = NULL does not produce the intended result.",

    "COALESCE returns the first non-null value from a list of expressions.",

    "CASE provides conditional logic inside a SQL query.",

    "An index can improve read performance by helping the database locate rows without scanning the full table.",

    "Indexes require additional storage and can make INSERT, UPDATE and DELETE operations more expensive.",

    "A transaction groups multiple database operations into one logical unit.",

    "COMMIT permanently saves a transaction, while ROLLBACK cancels uncommitted changes.",

    "Parameterized queries should be used instead of directly combining user input with SQL strings.",

    "Parameterized queries help prevent SQL injection.",

    "Query performance can be studied using an execution plan such as EXPLAIN."
  ],

  interview:
    "SQL is the language used to define, retrieve and modify relational data. I use it for CRUD operations, filtering, joins, grouping and aggregations. I understand that SQL is different from a database system: MySQL and PostgreSQL are systems that implement SQL. In a health-tracking application, SQL can be used to connect users with their health readings through primary and foreign keys and to retrieve each user’s records in chronological order.",

  keyPoints: [
    "CRUD",
    "SELECT",
    "WHERE",
    "JOIN",
    "GROUP BY",
    "HAVING",
    "Aggregations",
    "Subqueries",
    "CTEs",
    "Transactions",
    "Indexes",
    "SQL injection"
  ],

  code: `-- Example tables

CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE vital_readings (
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  systolic INT,
  diastolic INT,
  blood_sugar DECIMAL(6, 2),
  measured_at TIMESTAMP NOT NULL,

  CONSTRAINT fk_reading_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);

-- Retrieve one user's latest readings

SELECT
  id,
  systolic,
  diastolic,
  blood_sugar,
  measured_at
FROM vital_readings
WHERE user_id = 101
ORDER BY measured_at DESC;

-- Count readings for every user

SELECT
  user_id,
  COUNT(*) AS total_readings
FROM vital_readings
GROUP BY user_id
HAVING COUNT(*) > 0;

-- Join users with their readings

SELECT
  u.email,
  r.systolic,
  r.diastolic,
  r.measured_at
FROM users AS u
INNER JOIN vital_readings AS r
  ON r.user_id = u.id;`,

  followUps: [
    "What is SQL?",
    "What is CRUD?",
    "WHERE versus HAVING?",
    "INNER JOIN versus LEFT JOIN?",
    "What is a primary key?",
    "What is a foreign key?",
    "What is GROUP BY?",
    "What is a transaction?",
    "What is an index?",
    "How do you prevent SQL injection?"
  ],

  cautions: [
    "Do not describe SQL as a database.",

    "Avoid using SELECT * in interview examples when only a few columns are required.",

    "Do not compare NULL using = NULL. Use IS NULL.",

    "Do not combine untrusted user input directly into an SQL query.",

    "An index does not automatically improve every query.",

    "DELETE without a WHERE clause can remove every row from a table."
  ],

  qa: [
    {
      question: "1. What is SQL?",
      answer:
        "SQL is the language used to define, query and modify data in relational database systems."
    },

    {
      question: "2. What is CRUD?",
      answer:
        "CRUD stands for Create, Read, Update and Delete. In SQL these are commonly represented by INSERT, SELECT, UPDATE and DELETE."
    },

    {
      question: "3. What is the difference between WHERE and HAVING?",
      answer:
        "WHERE filters individual rows before grouping. HAVING filters groups after GROUP BY has been applied."
    },

    {
      question: "4. What is a JOIN?",
      answer:
        "A JOIN combines related rows from two or more tables using a matching condition."
    },

    {
      question: "5. INNER JOIN versus LEFT JOIN?",
      answer:
        "INNER JOIN returns only matching rows. LEFT JOIN returns all rows from the left table and matching rows from the right table."
    },

    {
      question: "6. What is GROUP BY?",
      answer:
        "GROUP BY combines rows with the same selected value so aggregate functions such as COUNT or AVG can be calculated per group."
    },

    {
      question: "7. WHERE versus ON in a join?",
      answer:
        "ON defines how tables are related during the join. WHERE filters the rows produced by the query."
    },

    {
      question: "8. UNION versus UNION ALL?",
      answer:
        "UNION combines results and removes duplicates. UNION ALL keeps duplicate rows and is generally less expensive."
    },

    {
      question: "9. What is a subquery?",
      answer:
        "A subquery is a query nested inside another query and used as an input to the outer query."
    },

    {
      question: "10. What is a CTE?",
      answer:
        "A Common Table Expression is a named temporary result created using WITH and used within one SQL statement."
    },

    {
      question: "11. What is an index?",
      answer:
        "An index is an additional data structure that helps the database locate rows faster. It improves many reads but adds storage and write overhead."
    },

    {
      question: "12. What is a transaction?",
      answer:
        "A transaction groups several operations into one logical unit so they can succeed together or be rolled back together."
    },

    {
      question: "13. What is SQL injection?",
      answer:
        "SQL injection occurs when untrusted input changes the intended structure of a query. Parameterized queries should be used to prevent it."
    },

    {
      question: "14. How did you use SQL concepts in your project?",
      answer:
        "The Healthcare Vitals Tracker stores users and health records in relational PostgreSQL tables. Each reading is linked to a user, and the application retrieves that user’s timestamped records."
    }
  ]
},
  {
  id: "relational-databases",
  title: "Relational Databases",
  category: "databases",

  short:
    "Database systems that organise structured data into tables connected through defined relationships.",

  simple: [
    "A relational database stores data in tables.",

    "A table contains rows and columns.",

    "A row represents one record.",

    "A column represents one property of the record.",

    "A primary key uniquely identifies a row.",

    "A foreign key connects one table to another table.",

    "Relationships help reduce unnecessary duplication.",

    "A one-to-one relationship connects one row with at most one row in another table.",

    "A one-to-many relationship connects one parent row with several child rows.",

    "A many-to-many relationship is commonly represented using an intermediate junction table.",

    "Constraints help keep data valid.",

    "Examples of constraints include PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL and CHECK.",

    "A schema defines the structure of the database.",

    "Transactions help keep related changes consistent.",

    "Relational databases are useful when data is structured and relationships between entities are important.",

    "In the Healthcare Vitals Tracker, one user can have many vital-reading records."
  ],

  technical: [
    "A relation is represented as a table containing tuples or rows and attributes or columns.",

    "A candidate key is a minimal set of columns capable of uniquely identifying a row.",

    "One candidate key is selected as the primary key.",

    "A composite key consists of more than one column.",

    "A surrogate key is an artificial identifier such as an auto-incrementing number or UUID.",

    "A natural key is based on meaningful business data such as a unique email address.",

    "Referential integrity ensures that a foreign-key value refers to a valid parent row or is null when allowed.",

    "ON DELETE CASCADE can automatically delete dependent child rows when the parent is deleted.",

    "ON DELETE RESTRICT can prevent deletion when dependent rows still exist.",

    "Normalization organises data to reduce duplication and modification anomalies.",

    "First Normal Form requires atomic values and no repeating groups.",

    "Second Normal Form removes partial dependency on part of a composite key.",

    "Third Normal Form removes transitive dependency between non-key attributes.",

    "Denormalization intentionally duplicates or combines data to improve particular read patterns.",

    "Entity integrity requires primary-key values to be unique and non-null.",

    "ACID stands for Atomicity, Consistency, Isolation and Durability.",

    "Atomicity means a transaction is completed fully or not at all.",

    "Consistency means transactions preserve defined rules and constraints.",

    "Isolation controls how concurrent transactions interact.",

    "Durability means committed changes survive failures.",

    "Indexes improve selected query patterns but should be chosen according to actual access needs.",

    "Views store a query definition and expose its result like a virtual table.",

    "Database schemas should represent domain entities, relationships, constraints and expected query patterns.",

    "Relational databases are strong when correctness, transactions and structured relationships matter."
  ],

  interview:
    "A relational database organises structured data into tables. Primary keys uniquely identify records, while foreign keys connect related tables. In the Healthcare Vitals Tracker, a user can have many health readings, so the user-to-reading relationship is one-to-many. Relational constraints help maintain data consistency, while transactions ensure that related database operations are completed safely.",

  keyPoints: [
    "Tables",
    "Rows and columns",
    "Primary keys",
    "Foreign keys",
    "Relationships",
    "Constraints",
    "Normalization",
    "Transactions",
    "ACID",
    "Referential integrity",
    "Indexes",
    "Views"
  ],

  code: `users
-----------------------------
id          PRIMARY KEY
email       UNIQUE NOT NULL
name        NOT NULL


vital_readings
-----------------------------
id          PRIMARY KEY
user_id     FOREIGN KEY
systolic
diastolic
blood_sugar
measured_at NOT NULL


Relationship:

One user
   |
   | has many
   v
Many vital_readings


Possible junction-table example:

students
courses
student_courses

student_courses contains:
- student_id
- course_id

This represents a many-to-many relationship.`,

  followUps: [
    "What is a relational database?",
    "What is a table?",
    "Primary key versus foreign key?",
    "What is a one-to-many relationship?",
    "What is a many-to-many relationship?",
    "What is normalization?",
    "What are ACID properties?",
    "What is referential integrity?",
    "What is a constraint?",
    "When would you use a relational database?"
  ],

  cautions: [
    "Do not say that a foreign key must always be unique.",

    "Do not use an email address as the only identifier without considering whether it can change.",

    "Normalization does not mean every table must be split as much as possible.",

    "Cascading deletes should be configured carefully.",

    "A relational database can also store JSON and less-structured data, depending on the database system."
  ],

  qa: [
    {
      question: "1. What is a relational database?",
      answer:
        "A relational database stores structured data in tables and connects those tables using defined relationships."
    },

    {
      question: "2. What is a primary key?",
      answer:
        "A primary key is a column or set of columns that uniquely identifies each row in a table."
    },

    {
      question: "3. What is a foreign key?",
      answer:
        "A foreign key is a column that references a key in another table and creates a relationship between the tables."
    },

    {
      question: "4. Primary key versus unique key?",
      answer:
        "Both enforce uniqueness, but a table has one selected primary key. A database may allow multiple unique constraints."
    },

    {
      question: "5. What is a one-to-many relationship?",
      answer:
        "One parent row can be connected to several child rows. For example, one user can have many health readings."
    },

    {
      question: "6. What is a many-to-many relationship?",
      answer:
        "Rows from each table can relate to several rows in the other table. A junction table is commonly used to represent this."
    },

    {
      question: "7. What is normalization?",
      answer:
        "Normalization organises tables to reduce duplicate data and avoid insertion, update and deletion anomalies."
    },

    {
      question: "8. What is referential integrity?",
      answer:
        "Referential integrity ensures that relationships remain valid, such as preventing a reading from referencing a user who does not exist."
    },

    {
      question: "9. What are ACID properties?",
      answer:
        "Atomicity, Consistency, Isolation and Durability describe reliable transaction behaviour."
    },

    {
      question: "10. What is a transaction?",
      answer:
        "A transaction is a set of database operations treated as one unit of work."
    },

    {
      question: "11. What is a schema?",
      answer:
        "A schema defines database objects such as tables, columns, relationships, constraints and indexes."
    },

    {
      question: "12. Why did your project use a relational database?",
      answer:
        "The data was structured, and every health reading belonged to a particular user. A relational database clearly represented that relationship and supported consistent querying."
    }
  ]
},
  {
  id: "mysql",
  title: "MySQL",
  category: "databases",

  short:
    "A widely used open-source relational database-management system that supports SQL and transactional data.",

  simple: [
    "MySQL is a relational database-management system.",

    "It uses SQL to create, retrieve and modify data.",

    "MySQL is widely used in web applications and business systems.",

    "It stores data in tables connected through keys and relationships.",

    "MySQL supports joins, indexes, constraints, transactions, views and stored procedures.",

    "MySQL is different from SQL. SQL is the language, while MySQL is a database system.",

    "MySQL commonly uses the InnoDB storage engine for transactions and foreign-key support.",

    "A MySQL server can contain several databases.",

    "Applications connect to MySQL using credentials and a database driver.",

    "Indexes can improve query performance.",

    "Transactions can group several changes into one reliable operation.",

    "MySQL is a suitable choice for many structured web-application workloads.",

    "My resume lists MySQL as a skill mainly for schema design, SQL queries, joins and relational database concepts."
  ],

  technical: [
    "MySQL follows a client-server architecture.",

    "The MySQL server manages data, permissions, queries, transactions and connections.",

    "InnoDB is the default storage engine in modern MySQL installations and supports transactions, row-level locking and foreign keys.",

    "MySQL supports common SQL data types such as INT, BIGINT, DECIMAL, VARCHAR, TEXT, DATE, DATETIME and TIMESTAMP.",

    "VARCHAR stores variable-length text up to a declared limit.",

    "DECIMAL is suitable for values that require exact decimal precision, such as financial data.",

    "AUTO_INCREMENT can generate numeric identifier values automatically.",

    "Indexes can be created on one column or several columns.",

    "The order of columns matters in a composite index.",

    "A covering index contains enough selected information for some queries to be answered directly from the index.",

    "EXPLAIN displays information about how MySQL plans to execute a query.",

    "Transactions use commands such as START TRANSACTION, COMMIT and ROLLBACK.",

    "MySQL supports isolation levels including Read Uncommitted, Read Committed, Repeatable Read and Serializable.",

    "Repeatable Read is commonly the default isolation level in MySQL InnoDB.",

    "Views expose stored query definitions.",

    "Stored procedures contain SQL logic executed inside the database server.",

    "Triggers execute automatically in response to certain table events.",

    "Users and privileges should be configured according to least privilege.",

    "Database backups and migrations are important for production maintenance.",

    "Character sets and collations control text storage and comparison behaviour.",

    "utf8mb4 is commonly used for full Unicode support."
  ],

  interview:
    "MySQL is an open-source relational database-management system that uses SQL. I have used MySQL concepts for creating schemas, writing CRUD queries, applying joins and defining primary and foreign keys. I understand that MySQL is the database software, while SQL is the query language. For transactional applications, MySQL commonly uses the InnoDB storage engine.",

  keyPoints: [
    "RDBMS",
    "InnoDB",
    "SQL",
    "Indexes",
    "Transactions",
    "Foreign keys",
    "EXPLAIN",
    "Views",
    "Stored procedures",
    "Permissions",
    "Character sets"
  ],

  code: `CREATE DATABASE interview_demo;

USE interview_demo;

CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP
    DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE readings (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  systolic INT NOT NULL,
  diastolic INT NOT NULL,
  measured_at DATETIME NOT NULL,

  CONSTRAINT fk_user_reading
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE INDEX idx_readings_user_date
  ON readings(user_id, measured_at);

EXPLAIN
SELECT *
FROM readings
WHERE user_id = 10
ORDER BY measured_at DESC;`,

  followUps: [
    "What is MySQL?",
    "SQL versus MySQL?",
    "What is InnoDB?",
    "What is AUTO_INCREMENT?",
    "What is a composite index?",
    "What does EXPLAIN do?",
    "What is an isolation level?",
    "What is a stored procedure?",
    "What is a trigger?",
    "Where have you used MySQL?"
  ],

  cautions: [
    "Do not claim that the Healthcare Vitals Tracker uses MySQL; it uses PostgreSQL through Supabase.",

    "Do not describe MySQL and SQL as the same thing.",

    "Do not create indexes on every column without considering query patterns.",

    "Use DECIMAL rather than FLOAT when exact decimal precision is required.",

    "Only claim stored-procedure or trigger experience when you have actually implemented them."
  ],

  qa: [
    {
      question: "1. What is MySQL?",
      answer:
        "MySQL is an open-source relational database-management system that stores structured data and accepts SQL queries."
    },

    {
      question: "2. SQL versus MySQL?",
      answer:
        "SQL is the query language. MySQL is a database-management system that implements SQL."
    },

    {
      question: "3. What is InnoDB?",
      answer:
        "InnoDB is MySQL’s commonly used storage engine. It supports transactions, foreign keys and row-level locking."
    },

    {
      question: "4. What is AUTO_INCREMENT?",
      answer:
        "AUTO_INCREMENT allows MySQL to generate the next numeric identifier automatically when a row is inserted."
    },

    {
      question: "5. What is a composite index?",
      answer:
        "A composite index contains multiple columns. The column order affects which queries can use it efficiently."
    },

    {
      question: "6. What does EXPLAIN do?",
      answer:
        "EXPLAIN shows the query execution plan, including table access, possible indexes and estimated row processing."
    },

    {
      question: "7. What are storage engines?",
      answer:
        "Storage engines define how MySQL stores and manages table data. InnoDB is the normal choice for transactional applications."
    },

    {
      question: "8. What is a stored procedure?",
      answer:
        "A stored procedure is named SQL logic stored and executed inside the database server."
    },

    {
      question: "9. What is a trigger?",
      answer:
        "A trigger runs automatically before or after a specified database event such as INSERT, UPDATE or DELETE."
    },

    {
      question: "10. Where did you use MySQL?",
      answer:
        "I used MySQL while learning relational schema design, CRUD operations, joins, keys and query writing. My current Healthcare Vitals Tracker uses PostgreSQL rather than MySQL."
    }
  ]
},
  {
  id: "postgresql",
  title: "PostgreSQL",
  category: "databases",

  short:
    "A powerful open-source relational database known for standards compliance, data integrity and advanced features.",

  simple: [
    "PostgreSQL is an open-source relational database-management system.",

    "It uses SQL and supports tables, relationships, constraints and transactions.",

    "PostgreSQL is known for strong data integrity and advanced query capabilities.",

    "It supports common relational features such as joins, indexes, views and foreign keys.",

    "It also supports JSON data alongside relational data.",

    "PostgreSQL provides many data types, functions and extension capabilities.",

    "Supabase uses PostgreSQL as its underlying database.",

    "The Healthcare Vitals Tracker stores health records in PostgreSQL through Supabase.",

    "Each reading can be linked to an authenticated user.",

    "PostgreSQL supports Row Level Security.",

    "Row Level Security can restrict which rows a user may access.",

    "Transactions help preserve consistency across related operations.",

    "PostgreSQL is useful for applications where structured data, relationships and correctness are important."
  ],

  technical: [
    "PostgreSQL supports standard SQL along with database-specific extensions.",

    "It supports transactional DDL for many schema operations.",

    "PostgreSQL uses Multi-Version Concurrency Control to allow concurrent access while reducing unnecessary blocking.",

    "MVCC allows transactions to work with consistent row versions.",

    "Common PostgreSQL data types include integer, bigint, numeric, text, varchar, boolean, date, timestamp, uuid, json and jsonb.",

    "json stores JSON text, while jsonb stores a processed binary representation that supports efficient indexing and operations.",

    "UUID is commonly used for globally unique identifiers.",

    "The RETURNING clause can return inserted, updated or deleted rows without requiring a separate query.",

    "PostgreSQL supports partial indexes that include only rows matching a condition.",

    "Expression indexes index the result of an expression rather than only a raw column.",

    "EXPLAIN and EXPLAIN ANALYZE help inspect query plans and actual execution behaviour.",

    "PostgreSQL supports window functions for calculations across related rows without collapsing them into one grouped result.",

    "Common Table Expressions use WITH and can improve readability for complex queries.",

    "PostgreSQL supports functions, triggers, views and materialized views.",

    "A materialized view stores the result of a query and must be refreshed when updated results are required.",

    "Row Level Security applies policies at the row level for SELECT, INSERT, UPDATE and DELETE.",

    "PostgreSQL schemas can organise database objects into logical namespaces.",

    "Extensions can add capabilities to PostgreSQL.",

    "Constraints and explicit data types help enforce correctness close to the data."
  ],

  interview:
    "PostgreSQL is the relational database used by Supabase in my Healthcare Vitals Tracker. It stores structured user-specific health readings and supports strong constraints, transactions and access policies. Each reading can be associated with the authenticated user’s ID. PostgreSQL Row Level Security can then ensure that users access only rows they own. I chose a relational database because the data has a clear structure and relationship between users and readings.",

  keyPoints: [
    "PostgreSQL",
    "Transactions",
    "MVCC",
    "JSONB",
    "UUID",
    "RETURNING",
    "Indexes",
    "Window functions",
    "Row Level Security",
    "Views",
    "Extensions",
    "Data integrity"
  ],

  code: `CREATE TABLE vital_readings (
  id UUID PRIMARY KEY
    DEFAULT gen_random_uuid(),

  user_id UUID NOT NULL,

  systolic INTEGER,
  diastolic INTEGER,
  blood_sugar NUMERIC(6, 2),

  measured_at TIMESTAMPTZ
    NOT NULL DEFAULT NOW()
);

CREATE INDEX
  idx_readings_user_measured
ON vital_readings (
  user_id,
  measured_at DESC
);

INSERT INTO vital_readings (
  user_id,
  systolic,
  diastolic
)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  120,
  80
)
RETURNING *;

SELECT
  user_id,
  measured_at,
  systolic,
  AVG(systolic) OVER (
    PARTITION BY user_id
    ORDER BY measured_at
    ROWS BETWEEN 2 PRECEDING
      AND CURRENT ROW
  ) AS moving_average
FROM vital_readings;`,

  followUps: [
    "What is PostgreSQL?",
    "Why did you use PostgreSQL?",
    "PostgreSQL versus MySQL?",
    "What is MVCC?",
    "What is JSONB?",
    "What does RETURNING do?",
    "What is Row Level Security?",
    "What is a window function?",
    "What is a materialized view?",
    "How is PostgreSQL used in Supabase?"
  ],

  cautions: [
    "Only claim Row Level Security when you have actually enabled and configured policies.",

    "Do not say PostgreSQL is automatically more suitable than MySQL for every application.",

    "Do not store timestamps as unclear local-time strings when timezone-aware timestamps are required.",

    "Do not treat JSONB as a replacement for correct relational modelling in every situation.",

    "Do not say Supabase and PostgreSQL are separate unrelated databases; Supabase is built around PostgreSQL."
  ],

  qa: [
    {
      question: "1. What is PostgreSQL?",
      answer:
        "PostgreSQL is an open-source relational database-management system known for data integrity, advanced SQL features and extensibility."
    },

    {
      question: "2. Why did your project use PostgreSQL?",
      answer:
        "The application data was structured, and every health reading belonged to a user. PostgreSQL represented that relationship clearly and supported secure access policies."
    },

    {
      question: "3. PostgreSQL versus MySQL?",
      answer:
        "Both are relational databases. PostgreSQL is often selected for advanced querying, extensibility and strict data features, while MySQL is widely used for conventional web workloads. The best choice depends on the project."
    },

    {
      question: "4. What is MVCC?",
      answer:
        "Multi-Version Concurrency Control allows concurrent transactions to work with different consistent row versions, reducing unnecessary read-write blocking."
    },

    {
      question: "5. What is JSONB?",
      answer:
        "JSONB stores JSON in a processed binary representation and supports indexing and efficient JSON operations."
    },

    {
      question: "6. What does RETURNING do?",
      answer:
        "RETURNING allows INSERT, UPDATE or DELETE statements to return affected row values immediately."
    },

    {
      question: "7. What is Row Level Security?",
      answer:
        "Row Level Security allows policies to control which individual rows a user may select, insert, update or delete."
    },

    {
      question: "8. What is a window function?",
      answer:
        "A window function calculates values across related rows while keeping each original row in the result."
    },

    {
      question: "9. View versus materialized view?",
      answer:
        "A normal view runs its underlying query when accessed. A materialized view stores the query result and must be refreshed."
    },

    {
      question: "10. How is PostgreSQL connected to Supabase?",
      answer:
        "Supabase provides a managed PostgreSQL database and adds services such as authentication, generated APIs, storage and access-policy integration."
    }
  ]
},
  {
  id: "supabase",
  title: "Supabase",
  category: "databases",

  short:
    "A Backend-as-a-Service platform built around PostgreSQL, providing authentication, APIs, storage and database access.",

  simple: [
    "Supabase is a Backend-as-a-Service platform.",

    "It is built around a hosted PostgreSQL database.",

    "Supabase provides authentication, generated APIs, storage and real-time features.",

    "It reduces the need to build every backend feature from scratch.",

    "The frontend can communicate with Supabase using its client library.",

    "Supabase Authentication can handle registration, login, logout and sessions.",

    "The database stores structured application data.",

    "The authenticated user has a unique user ID.",

    "Application records can store that user ID as an ownership field.",

    "Row Level Security policies can restrict users to their own data.",

    "Supabase generates database APIs based on PostgreSQL tables.",

    "The anon key is intended for client applications when access policies are correctly configured.",

    "The service-role key is highly privileged and must remain on a trusted server.",

    "In the Healthcare Vitals Tracker, Supabase handles authentication and PostgreSQL storage for health readings."
  ],

  technical: [
    "Supabase is built on open-source components and uses PostgreSQL as its database.",

    "The Supabase JavaScript client provides methods for authentication and database operations.",

    "A query such as supabase.from('vital_readings').select('*') requests records from a table.",

    "insert creates records, update modifies records and delete removes records.",

    "select can be combined with filters, ordering, limits and relationship queries.",

    "Supabase Authentication manages users and sessions.",

    "The authentication user ID is available to PostgreSQL policies through auth.uid().",

    "Row Level Security must be enabled on user-specific tables to enforce secure row access.",

    "SELECT policies control which rows can be read.",

    "INSERT policies use WITH CHECK to control which new rows may be created.",

    "UPDATE policies can use USING and WITH CHECK to control existing and updated row values.",

    "The anon key does not replace database security policies.",

    "The service-role key bypasses normal Row Level Security and must never be shipped to browser code.",

    "Supabase Storage can manage files in buckets with access policies.",

    "Real-time subscriptions can report selected database changes to connected clients.",

    "Edge Functions can run trusted server-side logic when application requirements exceed direct client-to-database operations.",

    "Environment variables commonly store the project URL and public anon key.",

    "Frontend environment variables are still visible in the delivered browser application.",

    "Errors returned by Supabase queries should be handled explicitly.",

    "Database migrations should be used to manage schema and policy changes consistently.",

    "Supabase simplifies backend development, but schema design, validation and access control remain developer responsibilities."
  ],

  interview:
    "Supabase is the Backend-as-a-Service platform I used for the Healthcare Vitals Tracker. It provided a hosted PostgreSQL database, email authentication and a client library for reading and writing health records. After a user logged in, each reading could be associated with that user’s ID. Row Level Security policies should then verify that auth.uid() matches the row’s user_id, so users can access only their own health data.",

  keyPoints: [
    "Backend-as-a-Service",
    "PostgreSQL",
    "Authentication",
    "Generated APIs",
    "Supabase client",
    "Row Level Security",
    "auth.uid()",
    "Storage",
    "Real-time",
    "Edge Functions",
    "Anon key",
    "Service-role key"
  ],

  code: `import {
  createClient
} from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type NewReading = {
  user_id: string;
  systolic: number;
  diastolic: number;
  measured_at: string;
};

export async function addReading(
  reading: NewReading
) {
  const {
    data,
    error
  } = await supabase
    .from("vital_readings")
    .insert(reading)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getReadings() {
  const {
    data,
    error
  } = await supabase
    .from("vital_readings")
    .select("*")
    .order("measured_at", {
      ascending: false
    });

  if (error) {
    throw error;
  }

  return data;
}

/*
Example PostgreSQL RLS policy:

CREATE POLICY
  "Users read their own readings"
ON vital_readings
FOR SELECT
USING (
  auth.uid() = user_id
);
*/`,

  followUps: [
    "What is Supabase?",
    "Why did you use Supabase?",
    "Is Supabase a database?",
    "How does the frontend communicate with Supabase?",
    "What is Row Level Security?",
    "What does auth.uid() return?",
    "Is the anon key safe in the frontend?",
    "What is the service-role key?",
    "What are Edge Functions?",
    "What are Supabase limitations?"
  ],

  cautions: [
    "Supabase is not only a database; it is a backend platform built around PostgreSQL.",

    "Do not expose the service-role key in frontend code.",

    "Do not claim user data is secure merely because the frontend filters by user ID.",

    "Only claim Row Level Security if the policies are actually configured.",

    "The public anon key is not a secret, but it must be combined with correct database policies.",

    "Do not claim you built a complete custom backend when you used managed Supabase services."
  ],

  qa: [
    {
      question: "1. What is Supabase?",
      answer:
        "Supabase is a Backend-as-a-Service platform built around PostgreSQL. It provides database hosting, authentication, generated APIs, storage and other backend features."
    },

    {
      question: "2. Why did you use Supabase?",
      answer:
        "The project required a relational database, email authentication and user-specific data access. Supabase provided these capabilities in one platform."
    },

    {
      question: "3. Is Supabase a database?",
      answer:
        "Supabase includes a hosted PostgreSQL database, but the platform also provides authentication, APIs, storage, real-time features and server-side functions."
    },

    {
      question: "4. How does React communicate with Supabase?",
      answer:
        "The React application uses the Supabase JavaScript client to perform authentication and database operations."
    },

    {
      question: "5. How are health readings linked to users?",
      answer:
        "Each reading stores the authenticated user’s ID in a user_id column."
    },

    {
      question: "6. What is Row Level Security?",
      answer:
        "Row Level Security uses PostgreSQL policies to control which individual rows a user can read or modify."
    },

    {
      question: "7. What does auth.uid() do?",
      answer:
        "Inside a Supabase PostgreSQL policy, auth.uid() returns the ID of the currently authenticated user."
    },

    {
      question: "8. Is the anon key safe in frontend code?",
      answer:
        "It is designed for client use, but it is safe only when Row Level Security and other access policies are correctly configured."
    },

    {
      question: "9. What is the service-role key?",
      answer:
        "It is a privileged server-side key that can bypass Row Level Security. It must never be included in browser code or public repositories."
    },

    {
      question: "10. What is one advantage of Supabase?",
      answer:
        "It speeds up development by providing a managed relational database, authentication and API access without requiring a complete custom backend."
    },

    {
      question: "11. What is one limitation of Supabase?",
      answer:
        "The application depends on a managed platform, and the developer still needs to understand database design, policies, performance and secure backend architecture."
    },

    {
      question: "12. How did you use Supabase in your project?",
      answer:
        "I used Supabase Authentication for email login and sessions and used its PostgreSQL database to store timestamped blood-pressure and blood-sugar readings."
    }
  ]
},
  {
  id: "android-studio",
  title: "Android Studio",
  category: "android",

  short:
    "The official IDE used to develop, test and debug Android applications.",

  simple: [
    "Android Studio is the official development environment for Android applications.",

    "It provides a code editor for Kotlin and Java.",

    "It includes an Android emulator for testing applications on virtual devices.",

    "Logcat displays application logs, warnings and errors.",

    "Android Studio integrates with Gradle to build and package the application."
  ],

  technical: [
    "The emulator simulates Android devices with different screen sizes and Android versions.",

    "The debugger allows breakpoints and step-by-step code execution.",

    "The Device Manager is used to create and manage virtual Android devices.",

    "The layout tools help developers preview Android user-interface screens.",

    "Android Studio uses Gradle for dependency management and build automation."
  ],

  interview:
    "Android Studio is the official IDE I used to develop CareCompanion. I used it to write Kotlin code, design and preview application screens, test the app using the emulator and inspect errors through Logcat. It also integrates with Gradle to build and package the Android application.",

  keyPoints: [
    "Android IDE",
    "Kotlin editor",
    "Emulator",
    "Debugger",
    "Logcat",
    "Device Manager"
  ],

  followUps: [
    "What is Android Studio?",
    "What is an emulator?",
    "What is Logcat?",
    "How did you test CareCompanion?"
  ],

  cautions: [
    "Android Studio is an IDE, not a programming language.",

    "Only mention Android tools and features that you actually used in CareCompanion."
  ],

  qa: [
    {
      question: "1. What is Android Studio?",
      answer:
        "Android Studio is the official integrated development environment for building Android applications."
    },

    {
      question: "2. What is an Android emulator?",
      answer:
        "An emulator simulates an Android device on a computer so the application can be tested without always using a physical phone."
    },

    {
      question: "3. What is Logcat?",
      answer:
        "Logcat displays system and application logs, including errors, warnings and debugging messages."
    },

    {
      question: "4. How did you use Android Studio?",
      answer:
        "I used it to write Kotlin code, create application screens, run CareCompanion on an emulator and debug errors."
    }
  ]
},
  {
  id: "gradle",
  title: "Gradle",
  category: "android",

  short:
    "The build system used to compile Android code, manage dependencies and create application packages.",

  simple: [
    "Gradle is a build-automation and dependency-management tool.",

    "Android Studio uses Gradle to build Android projects.",

    "Gradle downloads and manages external libraries required by the application.",

    "It compiles Kotlin code and processes Android resources.",

    "It packages the application into an APK or Android App Bundle."
  ],

  technical: [
    "Gradle build files contain project configuration and dependency declarations.",

    "Dependencies allow external libraries to be added without manually copying their code.",

    "Build types can create different versions such as debug and release builds.",

    "The Android Gradle Plugin connects Gradle with Android-specific build tasks.",

    "Gradle reports dependency or configuration errors during the build process."
  ],

  interview:
    "Gradle is the build system used by Android Studio. In CareCompanion, it managed project dependencies, compiled the Kotlin code, processed Android resources and generated the application build. Android Studio is the development environment, while Gradle performs the actual build process.",

  keyPoints: [
    "Build automation",
    "Dependencies",
    "Compilation",
    "Debug build",
    "Release build",
    "APK",
    "App Bundle"
  ],

  followUps: [
    "What is Gradle?",
    "Android Studio versus Gradle?",
    "What is a dependency?",
    "What is an APK?"
  ],

  cautions: [
    "Gradle is not an IDE.",

    "Do not claim advanced Gradle configuration experience unless you actually modified build files beyond adding basic dependencies."
  ],

  qa: [
    {
      question: "1. What is Gradle?",
      answer:
        "Gradle is a build-automation tool used to compile code, manage dependencies and package applications."
    },

    {
      question: "2. Android Studio versus Gradle?",
      answer:
        "Android Studio is the IDE used to write and debug the application. Gradle is the system that builds and packages it."
    },

    {
      question: "3. What is a dependency?",
      answer:
        "A dependency is an external library or module required by the project."
    },

    {
      question: "4. What is an APK?",
      answer:
        "An APK is an installable package file for an Android application."
    }
  ]
},
  {
  id: "git",
  title: "Git",
  category: "tools",

  short:
    "A distributed version-control system used to track changes in source code.",

  simple: [
    "Git is a distributed version-control system.",

    "It records changes made to files over time.",

    "Git allows developers to return to earlier versions of their code.",

    "Branches allow developers to work on features without directly changing the main branch.",

    "Commits store meaningful snapshots of project changes.",

    "Git can be used locally without GitHub.",

    "I used Git to track changes and push updates for my projects."
  ],

  technical: [
    "A repository is a folder whose history is tracked by Git.",

    "git add moves changes into the staging area.",

    "git commit records staged changes as a snapshot.",

    "git branch creates or lists branches.",

    "git merge combines changes from another branch.",

    "git pull downloads remote changes and integrates them locally.",

    "git push uploads local commits to a remote repository.",

    "A merge conflict occurs when Git cannot automatically combine competing changes."
  ],

  interview:
    "Git is a distributed version-control system that I use to track code changes and maintain project history. I create commits for logical updates, use branches when working on separate features and push the completed changes to a remote repository. It also allows me to restore earlier versions if something breaks.",

  keyPoints: [
    "Repository",
    "Commit",
    "Branch",
    "Merge",
    "Staging area",
    "Push and pull",
    "Merge conflicts"
  ],

  code: `git init

git status

git add .

git commit -m "Add interview guide content"

git branch -M main

git push origin main`,

  followUps: [
    "What is Git?",
    "What is a commit?",
    "What is a branch?",
    "What is a merge conflict?"
  ],

  cautions: [
    "Git and GitHub are not the same thing.",

    "Do not commit private keys, passwords or environment secrets.",

    "Write clear commit messages instead of vague messages such as update."
  ],

  qa: [
    {
      question: "1. What is Git?",
      answer:
        "Git is a distributed version-control system used to track changes in files and source code."
    },

    {
      question: "2. What is a commit?",
      answer:
        "A commit is a recorded snapshot of staged project changes with a message describing the update."
    },

    {
      question: "3. What is a branch?",
      answer:
        "A branch is an independent line of development that allows work to continue without immediately changing the main branch."
    },

    {
      question: "4. What is a merge conflict?",
      answer:
        "A merge conflict occurs when Git cannot automatically combine changes and the developer must choose the correct final code."
    },

    {
      question: "5. What is the staging area?",
      answer:
        "The staging area contains the changes selected to be included in the next commit."
    }
  ]
},
  {
  id: "github",
  title: "GitHub",
  category: "tools",

  short:
    "An online platform used to host Git repositories and collaborate on software projects.",

  simple: [
    "GitHub is a cloud platform for hosting Git repositories.",

    "It allows developers to store and share their code online.",

    "GitHub supports collaboration through branches and pull requests.",

    "Issues can be used to report bugs or track tasks.",

    "Pull requests allow changes to be reviewed before they are merged.",

    "GitHub keeps a visible history of commits and contributors.",

    "I use GitHub to host my projects and connect them to deployment platforms such as Vercel."
  ],

  technical: [
    "A remote repository is the online version of a Git repository.",

    "A pull request proposes merging changes from one branch into another.",

    "Code review allows team members to comment on and approve changes.",

    "GitHub Issues can track bugs, features and project tasks.",

    "GitHub Actions can automate testing, builds and deployments.",

    "A repository can be public or private.",

    "The origin remote commonly points to the main GitHub repository."
  ],

  interview:
    "GitHub is the online platform I use to host and share my Git repositories. I push project commits to GitHub, maintain the source-code history and connect repositories to services such as Vercel for deployment. In collaborative projects, GitHub can also support pull requests, code reviews and issue tracking.",

  keyPoints: [
    "Remote repository",
    "Pull requests",
    "Code reviews",
    "Issues",
    "Actions",
    "Public and private repositories",
    "Deployment integration"
  ],

  code: `git remote add origin \
https://github.com/USERNAME/PROJECT.git

git push -u origin main

git pull origin main`,

  followUps: [
    "What is GitHub?",
    "Git versus GitHub?",
    "What is a pull request?",
    "What is a remote repository?"
  ],

  cautions: [
    "Do not describe GitHub as the version-control system itself.",

    "Do not upload environment files containing secrets.",

    "Only claim pull-request or GitHub Actions experience if you have actually used them."
  ],

  qa: [
    {
      question: "1. What is GitHub?",
      answer:
        "GitHub is an online platform used to host Git repositories and support software collaboration."
    },

    {
      question: "2. Git versus GitHub?",
      answer:
        "Git is the version-control system used locally. GitHub is an online platform that hosts Git repositories."
    },

    {
      question: "3. What is a pull request?",
      answer:
        "A pull request proposes merging changes from one branch into another and allows the changes to be reviewed."
    },

    {
      question: "4. What is a remote repository?",
      answer:
        "A remote repository is a Git repository stored on another system, such as GitHub."
    },

    {
      question: "5. How did you use GitHub?",
      answer:
        "I used GitHub to host my project code, maintain commit history and connect the repository to Vercel for deployment."
    }
  ]
},
  {
    id: 'dsa', title: 'Data Structures & Algorithms', category: 'coursework', short: 'Organising data and solving problems efficiently.',
    simple: [
      'A data structure determines how data is organised.',
      'An algorithm is a step-by-step method for solving a problem.',
      'Time and space complexity help compare the efficiency of solutions.'
    ],
    technical: [
      'Arrays, linked lists, stacks, queues, hash tables, trees, graphs and heaps support different operation patterns.',
      'Big-O notation describes how resource use grows with input size.',
      'Choosing the correct structure often reduces algorithmic complexity.'
    ],
    interview: 'Data structures determine how data is organised, while algorithms determine how a problem is solved. I evaluate solutions using time and space complexity and select structures according to the required operations.',
    followUps: ['When would you use a hash map?', 'Explain O(log n).', 'BFS versus DFS?']
  },
  {
    id: 'oop', title: 'Object-Oriented Programming', category: 'coursework', short: 'Models software using objects containing data and behaviour.',
    simple: [
      'Encapsulation groups data and methods while controlling access.',
      'Abstraction exposes essential behaviour while hiding implementation details.',
      'Inheritance reuses or extends behaviour, while polymorphism allows one interface to have multiple implementations.'
    ],
    technical: [
      'Compile-time polymorphism can be achieved through overloading, while runtime polymorphism commonly uses overriding and virtual dispatch.',
      'Composition often creates looser coupling than inheritance.',
      'Interfaces and abstract classes define contracts and shared behaviour.'
    ],
    interview: 'Object-oriented programming structures software around objects containing data and behaviour. Its main principles are encapsulation, abstraction, inheritance and polymorphism.',
    followUps: ['Overloading versus overriding?', 'Composition versus inheritance?', 'Interface versus abstract class?']
  },
  {
    id: 'os', title: 'Operating Systems', category: 'coursework', short: 'Manages hardware resources and application execution.',
    simple: [
      'An operating system manages the CPU, memory, files and devices.',
      'A process is an executing program; a thread is an execution unit inside a process.',
      'Virtual memory lets programs use an address space that may be larger than physical RAM.'
    ],
    technical: [
      'Scheduling decides which ready process or thread receives CPU time.',
      'Synchronization prevents incorrect access to shared data.',
      'Deadlock requires mutual exclusion, hold and wait, no pre-emption and circular wait.'
    ],
    interview: 'An operating system manages CPU scheduling, memory, files, devices and process execution. My coursework covered processes, threads, scheduling, synchronisation, deadlocks and virtual memory.',
    followUps: ['Process versus thread?', 'What is a deadlock?', 'Paging versus segmentation?']
  },
  {
    id: 'dbms', title: 'DBMS', category: 'coursework', short: 'Software for storing, organising and retrieving data.',
    simple: [
      'A DBMS provides controlled storage and retrieval of data.',
      'Relational DBMS concepts include tables, keys, joins and transactions.',
      'Indexes improve many reads by providing faster lookup paths.'
    ],
    technical: [
      'Atomicity, Consistency, Isolation and Durability are the ACID transaction properties.',
      'Normalisation reduces redundancy and update anomalies.',
      'Concurrency control protects correctness when multiple transactions execute together.'
    ],
    interview: 'A Database Management System stores, organises and retrieves data while providing mechanisms such as constraints, transactions, indexing and concurrency control.',
    followUps: ['Explain ACID.', 'What is normalisation?', 'Why use an index?']
  },
  {
    id: 'cn', title: 'Computer Networks', category: 'coursework', short: 'How devices and software exchange data.',
    simple: [
      'Networks allow devices and applications to communicate.',
      'HTTP is an application protocol used by web clients and servers.',
      'HTTPS adds encrypted TLS communication.'
    ],
    technical: [
      'TCP is connection-oriented and reliable, while UDP avoids connection setup and delivery guarantees.',
      'DNS translates domain names into IP addresses.',
      'Routers forward packets between networks, while switches connect devices within a local network.'
    ],
    interview: 'Computer networks allow devices and systems to exchange data. My coursework covers the OSI and TCP/IP models, HTTP and HTTPS, DNS, IP addressing, TCP versus UDP and client-server communication.',
    followUps: ['TCP versus UDP?', 'What happens when you enter a URL?', 'HTTP versus HTTPS?']
  },
  {
    id: 'se', title: 'Software Engineering', category: 'coursework', short: 'Systematic process for delivering maintainable software.',
    simple: [
      'Software engineering covers requirements, design, development, testing, deployment and maintenance.',
      'It includes teamwork, documentation, version control and change management.',
      'Agile methods deliver work incrementally and adapt to feedback.'
    ],
    technical: [
      'Requirements should be converted into testable acceptance criteria.',
      'Testing includes unit, integration, system, regression and acceptance levels.',
      'Deployment should include configuration checks, smoke tests and rollback planning.'
    ],
    interview: 'Software engineering applies systematic processes to building and maintaining software. My BuildUp Mirai experience exposed me to requirements, implementation planning, testing, issue tracking and deployment support.',
    followUps: ['What is the SDLC?', 'Agile versus waterfall?', 'What is regression testing?']
  },
  {
    id: 'ml', title: 'Machine Learning', category: 'coursework', short: 'Learns patterns from data to make predictions or decisions.',
    simple: [
      'Supervised learning uses labelled examples.',
      'Unsupervised learning finds patterns in unlabelled data.',
      'Models should be evaluated on data that was not used to train them.'
    ],
    technical: [
      'Classification predicts categories, while regression predicts continuous values.',
      'Data preprocessing may include cleaning, encoding, scaling and feature selection.',
      'Overfitting occurs when a model learns training data too specifically and generalises poorly.'
    ],
    interview: 'My machine-learning coursework introduced me to data preprocessing, supervised and unsupervised learning, model training and evaluation. It complements my Honours programme in Data Science and Analytics.',
    cautions: ['Do not claim production model deployment unless you have actually implemented it.'],
    followUps: ['Classification versus regression?', 'What is overfitting?', 'Training versus test data?']
  },
  {
    id: 'buildup', title: 'BuildUp Mirai — Project Manager', category: 'experience', short: 'Dashboard, automation, testing and delivery coordination.',
    simple: [
      'Worked on a centralised dashboard for reporting, KPI tracking and operational workflows.',
      'Translated business requirements into features, data views, user flows and implementation tasks.',
      'Coordinated testing, issue tracking, deployment support and intern mentoring.'
    ],
    technical: [
      'A business request should be converted into clear acceptance criteria, data requirements, permissions and expected behaviour.',
      'A useful issue report includes steps to reproduce, expected behaviour, actual behaviour, environment and evidence.',
      'Deployment support may include production checks, smoke testing and post-release issue tracking.'
    ],
    interview: 'At BuildUp Mirai, I worked on a centralised business dashboard used for reporting, KPI monitoring and workflow automation. My role involved understanding business requirements and converting them into clear features, data views, user flows and implementation tasks for developers. I also coordinated testing, tracked issues, supported deployment and worked across two projects simultaneously.',
    cautions: ['Present this honestly as a project-management and delivery role, not a full-time software-development role.', 'Know the actual automation platform, triggers and notification flow before the interview.'],
    followUps: ['Were you coding?', 'How did you prioritise issues?', 'Describe one workflow automation.', 'How did you test a dashboard?']
  },
  {
    id: 'ui-volunteer', title: 'U&I — Volunteer', category: 'experience', short: 'Education support, communication and coordination.',
    simple: [
      'Supported education-focused initiatives for underprivileged children.',
      'Assisted with lesson planning, classroom activities and student engagement.',
      'Helped maintain communication and coordination within the volunteer group.'
    ],
    technical: [
      'Although not a technical role, it demonstrates structured communication, responsibility and adaptability.',
      'These skills transfer to requirement discussions, teamwork and explaining technical ideas clearly.'
    ],
    interview: 'At U&I, I supported education-focused sessions for underprivileged children. I assisted with lesson planning, classroom activities and coordination. It strengthened my communication skills because I had to explain ideas clearly and adapt to different learning needs.',
    followUps: ['What did you learn?', 'How did you handle different learning needs?', 'How does this help in a technical team?']
  },
];

export const projects: Project[] = [
  {
    id: 'care-companion',
    title: 'CareCompanion',
    stack: ['Kotlin', 'Android Studio', 'Gradle'],
    purpose: 'An Android healthcare companion for daily wellness tasks, medicine management, schedules, emergency contacts and SOS support.',
    overview: 'CareCompanion is a native Android application. The resume supports that you built screens for daily schedules, medicine management, emergency contacts and wellness/SOS features, with an emphasis on clear navigation and structured UI flows.',
    flow: ['User opens an Android screen', 'Kotlin handles interactions and application logic', 'Application data or state is updated', 'The interface displays the result'],
    whyStack: [
      { label: 'Kotlin', text: 'Modern Android language with concise syntax, null safety and Java interoperability.' },
      { label: 'Android Studio', text: 'Provides the emulator, debugger, resource tools and Android project environment.' },
      { label: 'Gradle', text: 'Manages dependencies, compiles the project and packages the Android application.' },
    ],
    interviewAnswer: 'CareCompanion is a native Android healthcare-support application that I developed using Kotlin. Its purpose is to bring daily wellness-related tasks into one application, including medicine management, schedules, emergency contacts and SOS support. I focused on creating structured navigation and simple user flows so that health-related features were easy to access.',
    questions: ['How did navigation work?', 'Where was medicine data stored?', 'How did the SOS feature behave?', 'Which Android permissions were required?', 'What was the hardest UI flow to design?'],
    verify: ['Whether you used activities, fragments, intents, bottom navigation or the Navigation Component.', 'Whether data was hardcoded, held in memory, stored locally or retrieved from an API.', 'Whether SOS opened the dialler, made a call, sent a message or only displayed contacts.'],
  },
  {
    id: 'vitals-tracker',
    title: 'Healthcare Vitals Tracker',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    purpose: 'A secure web platform for recording blood pressure and blood sugar readings and viewing timestamped personal history.',
    overview: 'This is the strongest full-stack project on the resume. It combines a component-based frontend, typed data, managed authentication and relational storage for user-specific health records.',
    flow: ['User registers or logs in', 'Supabase verifies the identity and restores a session', 'User submits blood pressure or blood sugar data', 'The frontend validates and sends the record', 'Supabase stores it in PostgreSQL', 'The user sees timestamped history associated with their account'],
    whyStack: [
      { label: 'React', text: 'Supports reusable, state-driven components for login, forms and history.' },
      { label: 'TypeScript', text: 'Defines predictable data structures for readings and component data.' },
      { label: 'Supabase', text: 'Provides managed authentication, data APIs and backend services.' },
      { label: 'PostgreSQL', text: 'Stores structured user-to-reading relationships with relational integrity.' },
    ],
    interviewAnswer: 'The Healthcare Vitals Tracker is a full-stack web application that allows users to securely record and review blood-pressure and blood-sugar readings. I built the frontend using React and TypeScript and used Supabase as the backend service for email authentication and PostgreSQL data storage. Each reading is timestamped and associated with the logged-in user.',
    questions: ['How did authentication work?', 'How were records associated with users?', 'Did you use Row Level Security?', 'What validation did the form perform?', 'How were timestamps generated and sorted?', 'What happened when a request failed?'],
    verify: ['Confirm whether Row Level Security was enabled and what policies existed.', 'Confirm the actual table and column names.', 'Confirm whether users could enter previous-day readings.', 'Confirm whether timestamps came from the browser or database.'],
  },
  {
    id: 'puzzle-grove',
    title: 'Puzzle Grove',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    purpose: 'A multi-game word-puzzle platform inspired by Wordle, Connections and Anagrams, with streaks and achievement progression.',
    overview: 'Puzzle Grove demonstrates browser fundamentals, responsive layout and game-state logic. JavaScript handles interactions and rules, while HTML, custom CSS and Bootstrap build the interface.',
    flow: ['User selects a game', 'JavaScript creates or loads game state', 'The user submits guesses or answers', 'Game logic checks the result', 'The interface updates attempts, score, streak or achievements', 'Progress is stored using the project’s chosen persistence method'],
    whyStack: [
      { label: 'HTML', text: 'Provides semantic structure for screens, controls and game content.' },
      { label: 'CSS', text: 'Creates layouts, game boards, visual feedback and responsive behaviour.' },
      { label: 'JavaScript', text: 'Implements game rules, event handling, state and progression.' },
      { label: 'Bootstrap', text: 'Speeds up responsive layout and common interface styling.' },
    ],
    interviewAnswer: 'Puzzle Grove is a browser-based word-puzzle platform containing multiple games inspired by Wordle, Connections and Anagrams. I used HTML for structure, CSS and Bootstrap for the responsive interface, and JavaScript for the game rules, interaction handling, session state, streaks and achievements.',
    questions: ['Where was progress stored?', 'How did the streak algorithm work?', 'Was authentication server-backed or client-side?', 'How did the different games share common logic?', 'How did you make the layout mobile-first?'],
    verify: ['Identify whether authentication used a backend service, localStorage, sessionStorage or a simulation.', 'Do not describe browser-only persistence as production-secure authentication.', 'Know exactly what causes a streak to increase, reset or remain unchanged.'],
  },
];

export const interviewBank = [
  'Tell me about yourself.',
  'Walk me through the Healthcare Vitals Tracker end to end.',
  'Why did you choose React and TypeScript?',
  'What is the difference between authentication and authorisation?',
  'How did you ensure one user could not see another user’s health data?',
  'What is Row Level Security?',
  'Why use PostgreSQL for health readings?',
  'What is the difference between SQL and MySQL?',
  'Explain props and state in React.',
  'What does useEffect do?',
  'What is the difference between React and Vite?',
  'How does JavaScript handle asynchronous work?',
  'Explain the event loop in simple terms.',
  'What is the difference between JavaScript and TypeScript?',
  'What is REST and what do the main HTTP methods mean?',
  'What is the difference between 401 and 403?',
  'Explain Git versus GitHub.',
  'Describe a merge conflict and how you resolved one.',
  'Why did you use Kotlin for CareCompanion?',
  'What is null safety in Kotlin?',
  'What does Gradle do?',
  'How did you structure navigation in CareCompanion?',
  'How did Puzzle Grove store sessions and progress?',
  'Explain CSS Grid versus Flexbox.',
  'What is mobile-first design?',
  'Were you coding at BuildUp Mirai?',
  'Describe one requirement you translated into a technical task.',
  'How did you document and prioritise issues?',
  'Explain one challenge, your approach and the result.',
  'What would you improve in each project?'
];

export const quizQuestions: QuizQuestion[] = [
  { id: 'q1', category: 'Frontend', question: 'What is React primarily responsible for?', options: ['Database storage', 'Building user interfaces', 'Compiling Kotlin', 'Managing Git repositories'], answer: 1, explanation: 'React is a component-based library for building user interfaces.' },
  { id: 'q2', category: 'Frontend', question: 'What does TypeScript add to JavaScript?', options: ['A database', 'Static type checking', 'An Android emulator', 'HTTP encryption'], answer: 1, explanation: 'TypeScript adds compile-time type checking and related tooling.' },
  { id: 'q3', category: 'Backend', question: 'Which HTTP method is normally used to create a resource?', options: ['GET', 'POST', 'DELETE', 'HEAD'], answer: 1, explanation: 'POST is commonly used to create a new resource.' },
  { id: 'q4', category: 'Security', question: 'What does authentication answer?', options: ['What are you allowed to do?', 'Who are you?', 'How fast is the query?', 'Where is the file stored?'], answer: 1, explanation: 'Authentication verifies identity; authorisation determines permissions.' },
  { id: 'q5', category: 'Database', question: 'What is the purpose of a primary key?', options: ['Style a table', 'Uniquely identify a row', 'Encrypt a password', 'Start a server'], answer: 1, explanation: 'A primary key uniquely identifies each row in a table.' },
  { id: 'q6', category: 'Database', question: 'Which database underlies Supabase?', options: ['MongoDB', 'PostgreSQL', 'SQLite only', 'Redis'], answer: 1, explanation: 'Supabase is built around PostgreSQL.' },
  { id: 'q7', category: 'Android', question: 'What is Gradle used for?', options: ['Designing logos', 'Building projects and managing dependencies', 'Writing SQL only', 'Hosting Git repositories'], answer: 1, explanation: 'Gradle automates builds and manages project dependencies.' },
  { id: 'q8', category: 'Tools', question: 'What is the difference between Git and GitHub?', options: ['There is no difference', 'Git is version control; GitHub hosts and collaborates on Git repositories', 'Git is a language; GitHub is a database', 'Git is only for Android'], answer: 1, explanation: 'Git tracks versions; GitHub is an online collaboration platform built around Git.' },
  { id: 'q9', category: 'CSS', question: 'Which layout system is generally best for two-dimensional rows and columns?', options: ['CSS Grid', 'A Java loop', 'SQL JOIN', 'Gradle'], answer: 0, explanation: 'CSS Grid is designed for two-dimensional layouts.' },
  { id: 'q10', category: 'JavaScript', question: 'Which declaration should generally be preferred when reassignment is not needed?', options: ['var', 'const', 'goto', 'static'], answer: 1, explanation: 'const communicates that the binding should not be reassigned.' },
  { id: 'q11', category: 'OS', question: 'A thread is best described as:', options: ['A database table', 'An execution unit within a process', 'A CSS selector', 'A Git remote'], answer: 1, explanation: 'Threads are execution units within a process and usually share process resources.' },
  { id: 'q12', category: 'Networks', question: 'What does HTTPS add to HTTP?', options: ['Database indexing', 'Encrypted TLS communication', 'A new programming language', 'Android packaging'], answer: 1, explanation: 'HTTPS protects HTTP communication using TLS.' },
];

export const resumeChecks = [
  'Node.js is listed, but no listed project explicitly uses it. Prepare one truthful use case.',
  'MySQL is listed, but no listed project demonstrates it. Prepare a schema, CRUD example and join.',
  'Java and Python appear as skills without project evidence. Describe your actual academic or problem-solving level.',
  'Confirm exactly how Puzzle Grove authentication and session management work.',
  'Confirm whether Supabase Row Level Security protects Healthcare Vitals Tracker records.',
  'Confirm where CareCompanion data is stored and how SOS behaves.',
  'Know the exact automation tool and trigger flow used at BuildUp Mirai.'
];
