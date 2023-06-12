# JsonRpcProvider

### The `JSON-RPC API` is a popular method for interacting with Ethereum and is available in all major Ethereum node implementations (e.g. `Geth` and `Parity`) as well as many third-party web services (e.g. `INFURA`)

<br />

jsonRpcProvider.connection ⇒ ConnectionInfo

The fully formed ConnectionInfo the Provider is connected to.
jsonRpcProvider.getSigner( [ addressOrIndex ] ) ⇒ JsonRpcSigner
source

Returns a JsonRpcSigner which is managed by this Ethereum node, at addressOrIndex. If no addressOrIndex is provided, the first account (account #0) is used.
jsonRpcProvider.getUncheckedSigner( [ addressOrIndex ] ) ⇒ JsonRpcUncheckedSigner
source
jsonRpcProvider.listAccounts( ) ⇒ Promise< Array< string > >
source

Returns a list of all account addresses managed by this provider.
jsonRpcProvider.send( method , params ) ⇒ Promise< any >
source

Allows sending raw messages to the provider.

This can be used for backend-specific calls, such as for debugging or specific account management.
 