# Remote Procedure Call

- [ ] The protocol supports multiple transport protocols. The most common protocol is HTTP while UDP and MQ can be applied - Remeber argument!
- [ ] figmatize a transport diagram
- [ ] figmatize a arcitechture diagram (stubbe!!)
- [ ] skriv mere om RPC generelt + opbygning
- [ ] Over fetching & under fetching

## Introduction

Remote Procedure Call, also known as RPC, is a protocol which during runtime provides a connection between two or more systems. This protocol is a client-server model in which the client has knowledge of the server credentials. A connection between the two systems are obtained through a shared interface and the use of an RPC library. RPC offers the possibility to request a remote or local service while hiding the internal functionality from the user.  
Through the shared interface a contract between the two systems is established to give mutual constraints upon the requests and responses which is handled by a stub.

A stub is the result when the shared interface is provided to the RPC library. After providing the interface, the stub contains the implemented methods which can be called in the application. Calling the stub methods creates a marshaling of the parameters so they can be transported to the other system as a request. When the request is received the system unmarshals it to make it readable. Marshaling and unmarshaling happens between both systems every time data is transferred.

Making a remote procedure call starts at the client environment where a request containing parameters if necessary is transferred through a network layer to the server. When the server receives the request, a method is executed in the remote environment that returns a response which is then transferred back to the client; this action is the procedure.

Remote procedure call can be synchronous or asynchronous depending on the implementation. In most cases the procedures are synchronous which means the client system is suspended when making a request until a response is received.

## Project References & Our Implementations

Our first assignment related to RPC was in the System Integration course where the main focus of the assignment was to get acquainted with and illustrate the use of RPC. (https://github.com/Soft20/RPC-Assignment)
We solved the assignment by making use of the library `node-rpc` (https://github.com/dkirchhof/node-rpc#readme) together with a strongly typed programming language, which we in our case decided would be TypeScript.
`skriv mere om node-rpc`

`indsæt kodeeksempel på brug af node-rpc`

After getting acquainted with RPC we chose to use it as the foundation in our project from the Large System Development course. This new project gave us a broader understanding of the protocol and how to optimize the implementation. One of the key features when using RPC is the possibility to create two concurrent systems that work independently until production. Because the client and server share an interface we can implement a fake on the client-side to be used during development. The fake substitutes the server with hardcoded implementations to test the client system's functionality.

Because the criteria of the Large System Development assignment was to build two systems from a contract, we decided to use the RPC protocol that is build around the common interface which in our case was the contract.

## Advantages/ Disadvantages

**Advantages:**

- It is possible to develop two or more concurrent (parallel) systems
- The requests and responses are decided in advance through the common interface
- Possibility for distributed subsystems
- By distributing the systems, performance will be optimized. (better resources)

_RPC allows the usage of the applications in a distributed environment that is not only in the local environment._

_With RPC code, re-writing and re-developing effort is minimized._
_The effort needs to re-write and re-develop the code is minimum._

**Disadvantages:**

- ff

_Remote procedure calling (and return) time (i.e., overheads) can be significantly lower than that for a local procedure._ ??

_This mechanism is highly vulnerable to failure as it involves a communication system, another machine, and another process._

_The cost of the process is increased because of a remote procedure call._

## Alternatives (RMI, REST)

### Remote Method Invocation

Remote Method Invocation also known as RMI is a Java specific equivalent to RPC. RMI uses, just like RPC,

_RMI uses java's native `Remote` interface and implements it to the targeted class for remote invocation. Instead of only sending parameters to the other subsystem RMI sends the remote class and calls the methods when arrived._

RMI uses, just like RPC, a transfer between method parameters and

### Representational State Transfer

Representational State Transfer or REST is a broadly supported architectural style for client-server communication. REST sends information by using json or xml data structure instead of sending information through methods. This gives the client a more dynamic interaction to the server but is still constraint to the HTTP methods and headers together with the required body content and structure. REST doesn't use any interface which means the client needs to read the API documentation before using it.

_REST describes “what to get and set”, and RPC describes “what to do”._

### GraphQL

_RMI vs REST vs GraphQL - development in flexibility between the three_

## Conclusion

[microsoft](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-tsgu/76796f19-9e6f-48b9-8b8f-4ef9f197056b#gt_8a7f6700-8311-45bc-af10-82e10accd331)

[microsoft MQ](https://docs.microsoft.com/da-dk/windows/win32/rpc/using-msmq-as-an-rpc-transport)

[Geeks for geeks](https://www.geeksforgeeks.org/remote-procedure-call-rpc-in-operating-system/)

[guru99](https://www.guru99.com/remote-procedure-call-rpc.html)

[linkedin](https://www.linkedin.com/pulse/rest-vs-rpc-soa-showdown-joshua-hartman/)

_[ibm](https://www.ibm.com/support/knowledgecenter/ssw_aix_71/commprogramming/ch8_rpc.html)_

Marshaling:
In computer science, marshalling or marshaling is the process of transforming the memory representation of an object to a data format suitable for storage or transmission, and it is typically used when data must be moved between different parts of a computer program or from one program to another.
