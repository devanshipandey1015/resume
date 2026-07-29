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
    id: 'html', title: 'HTML', category: 'languages', short: 'Markup language that structures webpage content.',
    simple: [
      'HTML defines the structure and meaning of webpage content.',
      'It creates headings, forms, buttons, images, links, tables and other elements.',
      'HTML is a markup language, not a programming language.'
    ],
    technical: [
      'Semantic elements such as header, nav, main, section and footer describe the purpose of content.',
      'Semantic HTML improves accessibility, search-engine understanding and maintainability.',
      'Forms use input controls and labels to collect user information.'
    ],
    interview: 'HTML is a markup language used to structure webpage content. I use semantic HTML elements to make interfaces more readable, accessible and maintainable.',
    code: `<main>\n  <section aria-labelledby="readings-title">\n    <h2 id="readings-title">Vitals history</h2>\n  </section>\n</main>`,
    followUps: ['What is semantic HTML?', 'Why are labels important?', 'div versus section?']
  },
  {
    id: 'css', title: 'CSS', category: 'languages', short: 'Styles and lays out HTML interfaces.',
    simple: [
      'CSS controls colours, fonts, spacing, layouts, animations and responsive behaviour.',
      'Flexbox is useful for one-dimensional alignment.',
      'CSS Grid is useful for layouts involving rows and columns.'
    ],
    technical: [
      'The box model consists of content, padding, border and margin.',
      'Specificity and the cascade determine which style rule is applied.',
      'Media queries adapt a layout to different viewport sizes.'
    ],
    interview: 'CSS controls the visual presentation and layout of HTML. I have used Flexbox for one-dimensional alignment and CSS Grid for layouts involving both rows and columns. I also use media queries to adapt interfaces to different screen sizes.',
    keyPoints: ['Box model', 'Flexbox', 'Grid', 'Specificity', 'Media queries', 'Positioning'],
    followUps: ['Grid versus Flexbox?', 'Explain the box model.', 'What is CSS specificity?']
  },
  {
    id: 'javascript', title: 'JavaScript', category: 'languages', short: 'Adds behaviour and interactivity to web pages.',
    simple: [
      'JavaScript handles button clicks, form validation, game logic, API calls and dynamic updates.',
      'It runs in browsers and can also run on servers through Node.js.',
      'In Puzzle Grove, it is responsible for game state, answer checking, streaks and achievements.'
    ],
    technical: [
      'JavaScript is dynamically typed and uses an event loop to coordinate asynchronous work.',
      'Promises and async/await simplify asynchronous operations such as API calls.',
      'The DOM API allows JavaScript to read and change the rendered page.'
    ],
    interview: 'JavaScript is the language responsible for browser-side behaviour. In Puzzle Grove, I used JavaScript for the game logic, user interaction, state updates and progression features.',
    keyPoints: ['let, const and var', 'Functions', 'DOM', 'Events', 'Promises', 'async/await', 'Closures', 'Event loop'],
    followUps: ['let versus const versus var?', 'What is a closure?', 'What is the event loop?', 'Promise versus async/await?']
  },
  {
    id: 'typescript', title: 'TypeScript', category: 'languages', short: 'JavaScript with compile-time type checking.',
    simple: [
      'TypeScript is a superset of JavaScript that adds static type checking.',
      'It catches many mistakes during development instead of waiting for runtime.',
      'TypeScript is compiled into JavaScript before the browser runs it.'
    ],
    technical: [
      'Interfaces and type aliases define predictable data structures.',
      'Union types, generics and type narrowing improve safety without removing JavaScript flexibility.',
      'TypeScript improves code completion, refactoring and collaboration in larger projects.'
    ],
    interview: 'TypeScript extends JavaScript with static typing. I used it in the Healthcare Vitals Tracker to define predictable structures for user data and health readings. It helped catch errors during development and made React components easier to maintain.',
    code: `interface VitalReading {\n  id: string;\n  systolic: number;\n  diastolic: number;\n  bloodSugar: number;\n  createdAt: string;\n}`,
    followUps: ['JavaScript versus TypeScript?', 'Interface versus type?', 'What are generics?']
  },
  {
    id: 'react', title: 'React', category: 'frontend', short: 'Component-based library for building user interfaces.',
    simple: [
      'React divides a user interface into reusable components.',
      'Props pass information into components, while state stores changing information.',
      'When state changes, React updates the necessary parts of the interface.'
    ],
    technical: [
      'React uses a declarative model: developers describe the desired UI for a given state.',
      'Hooks such as useState and useEffect support local state and side effects in function components.',
      'React reconciles changes between render outputs and applies required updates to the DOM.'
    ],
    interview: 'React is a component-based JavaScript library for building user interfaces. In the Healthcare Vitals Tracker, I used React to divide the application into reusable components such as the login interface, reading form and vitals-history view. State was used to manage form values, authentication status and fetched records.',
    keyPoints: ['Components', 'Props', 'State', 'Hooks', 'Conditional rendering', 'Lists and keys', 'Controlled forms'],
    code: `const [systolic, setSystolic] = useState<number>(0);`,
    followUps: ['Props versus state?', 'What is useEffect?', 'Why are keys needed?', 'Controlled versus uncontrolled components?'],
    cautions: ['Only state that you actually used in the project should be claimed.', 'React handles the UI; backend security must still be enforced separately.']
  },
  {
    id: 'vite', title: 'Vite', category: 'frontend', short: 'Fast development server and frontend build tool.',
    simple: [
      'Vite starts the local development server and prepares the project for production.',
      'It offers fast startup and Hot Module Replacement.',
      'React builds the interface; Vite runs and builds the React project.'
    ],
    technical: [
      'During development, Vite serves source modules efficiently using native ES module concepts.',
      'For production, Vite creates optimised static assets.',
      'It also processes TypeScript, CSS and imported resources through its toolchain.'
    ],
    interview: 'Vite is the development and build tool I used with React. It provides a fast development server and Hot Module Replacement, and it bundles the project into optimised static assets for production.',
    followUps: ['React versus Vite?', 'What is Hot Module Replacement?', 'Development build versus production build?']
  },
  {
    id: 'bootstrap', title: 'Bootstrap', category: 'frontend', short: 'CSS framework with responsive utilities and components.',
    simple: [
      'Bootstrap provides a responsive grid and ready-made utility classes.',
      'It speeds up interface development for forms, spacing, navigation and responsive layouts.',
      'Custom CSS is still useful so the application does not look generic.'
    ],
    technical: [
      'Bootstrap follows a breakpoint-based responsive grid system.',
      'Utility classes apply common spacing, display, flex and typography rules.',
      'Its components can be customised by overriding styles or changing Sass variables in advanced setups.'
    ],
    interview: 'Bootstrap is a CSS framework that provides a responsive grid system and reusable utility classes. I used it in Puzzle Grove to build a mobile-first layout more quickly while combining it with custom CSS for the game-specific design.',
    followUps: ['Why use Bootstrap?', 'Bootstrap versus custom CSS?', 'What are breakpoints?']
  },
  {
    id: 'responsive', title: 'Responsive Web Design', category: 'frontend', short: 'Adapts interfaces across mobile, tablet and desktop.',
    simple: [
      'Responsive design allows a website to work well at different screen sizes.',
      'A mobile-first approach begins with small screens and progressively adds larger layouts.',
      'Common tools include relative units, media queries, Flexbox, Grid and responsive images.'
    ],
    technical: [
      'Breakpoints should be based on layout needs rather than only device names.',
      'Fluid containers and flexible media prevent horizontal overflow.',
      'Touch target size, readable text and keyboard navigation are also part of usable responsive design.'
    ],
    interview: 'Responsive web design means creating an interface that adapts to different screen sizes. In Puzzle Grove, I used a mobile-first approach with Bootstrap breakpoints, CSS Grid, Flexbox and custom media queries.',
    followUps: ['What is mobile-first design?', 'Grid versus Flexbox?', 'How do you test responsiveness?']
  },
  {
    id: 'node', title: 'Node.js', category: 'backend', short: 'JavaScript runtime for server-side development.',
    simple: [
      'Node.js allows JavaScript to run outside the browser.',
      'It is commonly used for web servers, APIs, command-line tools and scripts.',
      'Node.js is a runtime, not a programming language or database.'
    ],
    technical: [
      'Node.js uses the V8 JavaScript engine and an event-driven, non-blocking I/O model.',
      'It is well suited to I/O-heavy workloads such as API requests and database operations.',
      'The package ecosystem is commonly managed through npm.'
    ],
    interview: 'Node.js is a JavaScript runtime used for server-side development. It allows the same language to be used across the frontend and backend. Its event-driven model is useful for handling API requests and other I/O-heavy operations.',
    cautions: ['Node.js is listed on the resume but is not explicitly shown in the three project stacks. Prepare a truthful example of where you used it.', 'Do not claim that Supabase is a Node.js backend you personally built.'],
    followUps: ['What is the event loop?', 'Why is Node.js good for I/O?', 'Is Node.js single-threaded?']
  },
  {
    id: 'rest', title: 'REST APIs', category: 'backend', short: 'Resource-oriented communication over HTTP.',
    simple: [
      'An API allows software systems to communicate.',
      'REST APIs organise operations around resources and HTTP methods.',
      'A frontend can request, create, update or delete backend data through endpoints.'
    ],
    technical: [
      'GET retrieves, POST creates, PUT replaces, PATCH partially updates and DELETE removes resources.',
      'HTTP status codes communicate outcomes such as 200 success, 201 created, 400 invalid request, 401 unauthenticated, 403 forbidden and 500 server error.',
      'RESTful APIs are normally stateless: each request contains the context required to process it.'
    ],
    interview: 'A REST API allows the frontend and backend to communicate through HTTP requests. Resources are identified through endpoints, and operations are performed using methods such as GET, POST, PUT and DELETE.',
    code: `GET /readings\nPOST /readings\nPATCH /readings/123\nDELETE /readings/123`,
    followUps: ['PUT versus PATCH?', '401 versus 403?', 'What does stateless mean?']
  },
  {
    id: 'authentication', title: 'Authentication', category: 'backend', short: 'Verifies who a user is.',
    simple: [
      'Authentication verifies the identity of a user.',
      'Authorisation determines what that authenticated user is allowed to access.',
      'Secure systems do not store passwords as plain text.'
    ],
    technical: [
      'A successful login normally results in a server-side session or a signed token.',
      'Protected routes improve user experience, but backend access controls provide the actual security boundary.',
      'Password hashing and token generation should be delegated to secure libraries or managed services.'
    ],
    interview: 'Authentication verifies the user’s identity. In the Healthcare Vitals Tracker, users register or log in through Supabase Authentication. After successful authentication, the application maintains the user session and permits access to that user’s health records.',
    followUps: ['Authentication versus authorisation?', 'Session versus token?', 'Why not store plain-text passwords?']
  },
  {
    id: 'supabase-auth', title: 'Supabase Authentication', category: 'backend', short: 'Managed registration, login and session service.',
    simple: [
      'Supabase Authentication handles registration, login and user sessions.',
      'It can support email/password login, magic links, password reset and social login.',
      'Using a managed service avoids implementing credential storage manually.'
    ],
    technical: [
      'Supabase Auth issues identity information that can be used with database access policies.',
      'The authenticated user ID can be associated with application records.',
      'The client can listen for authentication-state changes and restore existing sessions.'
    ],
    interview: 'I used Supabase Authentication to handle email-based registration, login and session management. This allowed me to focus on application features while using a managed authentication service rather than implementing credential storage manually.',
    followUps: ['How did you protect user-specific rows?', 'How did session restoration work?', 'What happens on logout?']
  },
  {
    id: 'sql', title: 'SQL', category: 'databases', short: 'Language for defining and querying relational data.',
    simple: [
      'SQL is used to create, read, update and delete relational data.',
      'It also supports filtering, sorting, joining and aggregation.',
      'SQL is a language; MySQL and PostgreSQL are database systems that understand it.'
    ],
    technical: [
      'SELECT retrieves data, INSERT creates rows, UPDATE changes rows and DELETE removes rows.',
      'JOIN operations combine related tables using matching columns.',
      'GROUP BY and aggregate functions such as COUNT, SUM and AVG summarise data.'
    ],
    interview: 'SQL is the language used to define, query and modify relational data. I use it for CRUD operations, filtering, joins, aggregations and defining relationships between tables.',
    code: `SELECT user_id, COUNT(*) AS reading_count\nFROM vital_readings\nGROUP BY user_id;`,
    followUps: ['INNER JOIN versus LEFT JOIN?', 'WHERE versus HAVING?', 'What is an index?']
  },
  {
    id: 'relational-db', title: 'Relational Databases', category: 'databases', short: 'Stores structured data in related tables.',
    simple: [
      'A relational database stores information in tables made of rows and columns.',
      'Primary keys uniquely identify rows.',
      'Foreign keys connect records across tables.'
    ],
    technical: [
      'Constraints enforce rules such as uniqueness, valid references and required values.',
      'Normalisation reduces unnecessary duplication and update anomalies.',
      'Transactions group related operations into a reliable unit of work.'
    ],
    interview: 'A relational database organises data into related tables. Primary keys uniquely identify rows, while foreign keys establish relationships between entities. For a health tracker, a reading can store the authenticated user’s ID as a foreign key.',
    followUps: ['Primary key versus foreign key?', 'What is normalisation?', 'What is a transaction?']
  },
  {
    id: 'mysql', title: 'MySQL', category: 'databases', short: 'Popular open-source relational database system.',
    simple: [
      'MySQL stores structured information and supports SQL queries.',
      'It is widely used in traditional web applications.',
      'It supports indexes, constraints, joins and transactions.'
    ],
    technical: [
      'Schema design determines tables, column types, keys and relationships.',
      'Indexes speed up reads but consume storage and can add write overhead.',
      'Transactions provide reliable multi-step operations when used with a transactional storage engine.'
    ],
    interview: 'MySQL is a relational database-management system that uses SQL. I have used it to learn schema design, CRUD operations, joins and relationships between tables.',
    cautions: ['MySQL is listed as a skill but not connected to a listed project. Prepare one concrete schema or exercise you implemented.'],
    followUps: ['SQL versus MySQL?', 'What is an index?', 'Explain a join you have written.']
  },
  {
    id: 'postgresql', title: 'PostgreSQL', category: 'databases', short: 'Feature-rich open-source relational database.',
    simple: [
      'PostgreSQL is the database used underneath Supabase.',
      'It stores structured health records and relationships.',
      'It is known for data integrity, standards support and advanced features.'
    ],
    technical: [
      'PostgreSQL supports transactions, constraints, JSON data, views, indexes and functions.',
      'In Supabase, Row Level Security can restrict which rows a user may access.',
      'Relational constraints can ensure that records remain connected to valid users.'
    ],
    interview: 'PostgreSQL is the relational database underlying my Healthcare Vitals Tracker through Supabase. It stores structured user-specific health readings and supports relational constraints and secure data-access rules.',
    followUps: ['PostgreSQL versus MySQL?', 'What is Row Level Security?', 'Why use a relational database here?']
  },
  {
    id: 'supabase', title: 'Supabase', category: 'databases', short: 'Backend-as-a-Service built around PostgreSQL.',
    simple: [
      'Supabase combines a hosted PostgreSQL database with authentication, APIs and other backend services.',
      'It allowed the Healthcare Vitals Tracker to store data without building a complete custom server.',
      'Supabase is more than a database; it is a managed backend platform.'
    ],
    technical: [
      'Supabase generates data APIs around PostgreSQL and provides client libraries for applications.',
      'Authentication identity can be combined with Row Level Security policies.',
      'Storage, realtime capabilities and serverless functions can be added when required.'
    ],
    interview: 'Supabase is a Backend-as-a-Service platform built on PostgreSQL. In my project, I used it for email authentication, storing health readings and connecting the React application to backend data without building a complete custom server.',
    cautions: ['Confirm whether Row Level Security was actually enabled before claiming it.', 'Frontend filtering alone is not sufficient protection for user-specific records.'],
    followUps: ['Why Supabase instead of a custom backend?', 'How did you secure records?', 'Supabase versus Firebase?']
  },
  {
    id: 'android-studio', title: 'Android Studio', category: 'android', short: 'Official IDE for Android development.',
    simple: [
      'Android Studio is where the CareCompanion application was written, run and debugged.',
      'It includes an emulator, debugger, device manager and layout tools.',
      'It integrates directly with the Gradle build system.'
    ],
    technical: [
      'Logcat displays application and system logs for debugging.',
      'The emulator simulates Android devices with different versions and screen configurations.',
      'The IDE manages Kotlin source code, Android resources, manifests and build variants.'
    ],
    interview: 'Android Studio is the IDE I used to develop CareCompanion. It provided the emulator, debugging tools, layout support and Gradle integration required to build and test the Android application.',
    followUps: ['What is Logcat?', 'Emulator versus physical device testing?', 'What is AndroidManifest.xml?']
  },
  {
    id: 'gradle', title: 'Gradle', category: 'android', short: 'Build automation and dependency management for Android.',
    simple: [
      'Gradle compiles the Kotlin code and packages the Android application.',
      'It downloads and manages libraries used by the project.',
      'Android Studio is the IDE; Gradle performs the build.'
    ],
    technical: [
      'Gradle handles build types, product flavours, dependency graphs and resource processing.',
      'Android builds may produce APK or Android App Bundle outputs.',
      'Configuration files define plugins, SDK versions and dependencies.'
    ],
    interview: 'Gradle is the build system used by Android Studio. It manages project dependencies, compiles the Kotlin code, processes resources and packages the application into an installable build.',
    followUps: ['Android Studio versus Gradle?', 'What is a dependency?', 'APK versus App Bundle?']
  },
  {
    id: 'git', title: 'Git', category: 'tools', short: 'Distributed version-control system.',
    simple: [
      'Git tracks changes made to code over time.',
      'It lets developers create branches, commit changes, merge work and recover previous versions.',
      'Each developer can have a complete local copy of the repository history.'
    ],
    technical: [
      'A commit records a snapshot and metadata such as author and parent commit.',
      'Branches are movable references to commits.',
      'Merge conflicts happen when Git cannot automatically reconcile competing changes.'
    ],
    interview: 'Git is a distributed version-control system. I use it to track code changes, create separate branches for features, commit logical updates and recover earlier versions when needed.',
    code: `git checkout -b feature/vitals-history\ngit add .\ngit commit -m "Add vitals history"\ngit push -u origin feature/vitals-history`,
    followUps: ['Merge versus rebase?', 'What is a conflict?', 'What makes a good commit?']
  },
  {
    id: 'github', title: 'GitHub', category: 'tools', short: 'Online hosting and collaboration platform for Git.',
    simple: [
      'GitHub stores Git repositories online.',
      'It provides pull requests, issues, code review and automation features.',
      'Git is the version-control system; GitHub is a platform built around Git.'
    ],
    technical: [
      'Pull requests propose changes and provide a place for review before merging.',
      'Issues track bugs, feature requests and project work.',
      'GitHub Actions can automate testing and deployment workflows.'
    ],
    interview: 'Git is the version-control system running locally, while GitHub is a cloud platform used to host and collaborate on Git repositories.',
    followUps: ['What is a pull request?', 'Git versus GitHub?', 'How do you review code?']
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
