/*
javascript is a garbage collected language.

That means, when javascript allocates memory, let's say within a function 
we create an object and that object gets stored somewhere on our memory heap, 
automatocally with Javascript when we finish calling a function and let's say we don't need
that object anymore, it is going to clean it for us.

So, Javascript automatically frees up this memory we nolonger use and well, 
collects our garbage. so only the data that is still useful to us remains.

This way we make sure we don't use up all the memory we have available
bacause the memory is limited.

In Garbage collector languages like javascript the garbage collector frees 
memory on the heap and prevents ehat we call memery leaks. that is when the memoty gets too 
big until we reach our maximum size.
*/
