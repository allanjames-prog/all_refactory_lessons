## Symmetric Encryption

Symmetric encryption is a method of securing data where the same key is used to both encrypt (lock) and decrypt (unlock) the information. Think of it like a box with a lock. To put something inside (encryption), you use a key to lock the box. Later, to open it and get the contents (decryption), you use the same key.

The challenge with symmetric encryption is that if someone else gets hold of the key, they can unlock the information, so keeping the key secure is very important. This method is fast and commonly used for encrypting large amounts of data.

## Asymmetric Encryption

Asymmetric encryption is a method where two different keys are used: one to encrypt the data and another to decrypt it. These two keys are called a *public key* and a *private key*.

Here’s how it works:
- **Public key**: This key is shared with everyone and can be used to encrypt data.
- **Private key**: This key is kept secret and is used to decrypt the data that was encrypted with the public key.

So, if someone wants to send you a secret message, they use your **public key** to encrypt it. You, however, use your **private key** to decrypt it and read the message.

The key idea here is that even if someone knows your public key, they can’t decrypt the message because they don’t have your private key. This makes asymmetric encryption great for secure communication over the internet, like when you're sending messages or making online transactions.

## Hashing

Hashing is a process of converting data (like a password or a file) into a fixed-length string of characters, usually a number or a sequence of letters. This string, called a *hash*, is unique to the original data, but you can't turn the hash back into the original data.

Think of it like making a fingerprint of the data:
- When you create a hash, it’s like stamping the data with a unique fingerprint.
- The important thing is that even if the data changes just a little, the hash (fingerprint) changes completely.
- You can't reverse-engineer the fingerprint to get back the original data, making it a one-way process.

For example, when you enter a password on a website, the website hashes it and stores that hash. When you log in again, it hashes the password you type and compares it with the stored hash. If they match, you’re granted access.

Hashing is often used for things like storing passwords securely, checking the integrity of data, and digital signatures.
