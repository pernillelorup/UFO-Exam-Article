# Remote Procedure Call

## Introduction

Remote Procedure Call, also known as RPC, is a protocol which provides a connection between two or more systems. This protocol is a client-server model in which the client has knowledge of the server credentials. A connection between the two systems are obtained through a shared interface. RPC offers the possibility to request a remote or local service while hiding the internal functionality from the user.  
Through the shared interface a contract between the two systems is established to give mutual constraints upon the requests and responses.
To make use of RPC, you need to write in a strongly typed programming language.

## Project References & Our Implementations

Our first assignment related to RPC was in the System Integration course where the main focus of the assignment was to get acquainted with and illustrate the use of RPC. (https://github.com/Soft20/RPC-Assignment)
We solved the assignment by making use of the library `node-rpc` (https://github.com/dkirchhof/node-rpc#readme) together with a strongly typed programming language, which we in our case decided would be TypeScript.

After getting acquainted with RPC we chose to use it as the foundation in our project from the Large System Development course. This new project gave us a broader understanding of the protocol and how to optimize the implementation. One of the key features when using RPC is the possibility to create two concurrent systems that work independently until production. Because the client and server share an interface we can implement a fake on the client-side to be used during development. The fake substitutes the server with hardcoded implementations to test the client system's functionality.

Because the criteria of the Large System Development assignment was to build two systems from a contract, we decided to use the RPC protocol that is build around the common interface which in our case was the contract.

## Advantages/ Disadvantages

**Advantages:**

- It is possible to develop two or more concurrent (parallel) systems
- The requests and responses are decided in advance through the common interface
- Possibility for distributed subsystems
- By distributing the systems, performance will be optimized. (better resources)

**Disadvantages:**

- ff

## Alternatives (RMI, REST)

_REST describes “what to get and set”, and RPC describes “what to do”._

## Conclusion
