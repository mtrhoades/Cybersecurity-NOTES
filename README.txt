CYBERSECURITY NOTES:


Module 1:

Cybersecurity encompasses any measure taken to secure computer systems, networks, and data.

Cyberattacks are any attempt to expose, alter, disable, destroy, steal, or gain information through unauthorized access to or make unauthorized use of an asset.

Robert T. Morris ---> why is he important to cybersecurity?
    first person to release a computer virus/worm on UNIX systems.
    he was trying to count the total number of machines connected to the web.
        worm ---> virus that replicates itself to spread to lots of computers.

(1990's) ILOVEYOU virus created by Onel de Guzman
    first email related virus

SSL Internet Protocol (secure sockets layer) (SSL certificate) (made in 1990's)
    HyperText Transfer Protocol (HTTP) is used to communicate between machines. SSL (Secure Sockets Layer) or TSL (Transport Layer Security) adds a layer of encryption and protection to that communication.

Anonymous ---> first major hacker group (2000's)

Albert Gonzalez ---> biggest credit card fraud from hacking (2000's)

Project Chanology ---> goal was to call out the church of Scientology for censorship.

Social Engineering Attacks:
    Phishing ---> one of the most common and most reported types of cyberattacks.
    A phisher uses a false identity to trick the victim into unwittingly exposing their system to malware.

        phishing cycle = Information Gathering ---> Developing Relationship ---> Exploitation ---> Execution

        other social engineering attacks ---> 
            - baiting
            - scareware
            - spear phishing

On-Path ---> this is another common type of attack. This type of attack involves a malicious third party intercepting communications between two victims.

Zero-Day Attacks ---> occur when a hacker exploits a software vulnerability that has been discovered and reported by the vendor.
    Virtual Patching is a valid strategy for protection against zero-day attacks.

Cross-Site Scripting (XSS) ---> attacks that are carried out by sending malicious code often through a browser-side script.
    OWASP ---> open web application security project.
        - To improve security of software.
        - OWASP XSS Prevention Cheat Sheet
            - https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
    The malicious content sent to the web browser often takes the form of a segment of JavaScript, but may also include HTML, Flash, or any other type of code that the browser may execute. The variety of attacks based on XSS is almost limitless, but they commonly include transmitting private data, like cookies or other session information, to the attacker, redirecting the victim to web content controlled by the attacker, or performing other malicious operations on the user’s machine under the guise of the vulnerable site.

    The best way to find flaws is to perform a security review of the code and search for all places where input from an HTTP request could possibly make its way into the HTML output. Note that a variety of different HTML tags can be used to transmit a malicious JavaScript. Nessus, Nikto, and some other available tools can help scan a website for these flaws, but can only scratch the surface. If one part of a website is vulnerable, there is a high likelihood that there are other problems as well.

    An XSS attack can employ a Trojan horse program to modify the content on a site, tricking users into providing sensitive information.

    Successful XSS attacks can reveal session cookies, which allow cybercriminals to impersonate real users and use their accounts.

    In late 2015 and early 2016, eBay had a severe XSS vulnerability. The website used a “url” parameter that redirected users to different pages on the platform, but the value of the parameter was not validated. This allowed attackers to inject malicious code into a page. 

    The vulnerability enabled attackers to gain full access to eBay seller accounts, sell products at a discount, and steal payment details. It was actively used by attackers to manipulate eBay listings of high value products such as vehicles. eBay eventually remediated the vulnerability, but follow-on attacks continued until 2017.


SQL-Injection ---> attacks that occur when an attacker interferes with queries made to a database.
    SQL injection is a code injection technique that might destroy your database.

    SQL injection is one of the most common web hacking techniques.

    SQL injection is the placement of malicious code in SQL statements, via web page input.

    SQL injection usually occurs when you ask a user for input, like their username/userid, and instead of a name/id, the user gives you an SQL statement that you will unknowingly run on your database.

    Manipulates the queries of databases with user information to gain access to accounts.

    Injection attacks occur when maliciously crafted inputs are submitted by an attacker, causing an application to perform an unintended action. Because of the ubiquity of SQL databases, SQL injection is one of the most common types of attack on the internet.

    To Protect against ---> Parameterized Statements
        Programming languages talk to SQL databases using database drivers. A driver allows an application to construct and run SQL statements against a database, extracting and manipulating data as needed. Parameterized statements make sure that the parameters (i.e. inputs) passed into SQL statements are treated in a safe manner.

Rainbow Tables ---> A Rainbow Table is essentially a mechanism for breaking through password hashes with the intent to steal user data. By figuring out how passwords are hashed, the Rainbow Table is able to un-hash the password.

    The passwords in a computer system are not stored directly as plain texts but are hashed using encryption. A hash function is a 1-way function, which means that it can’t be decrypted. Whenever a user enters a password, it is converted into a hash value and is compared with the already stored hash value. If the values match, the user is authenticated.

    A rainbow table is a database that is used to gain authentication by cracking the password hash. It is a precomputed dictionary of plaintext passwords and their corresponding hash values that can be used to find out what plaintext password produces a particular hash. Since more than one text can produce the same hash, it’s not important to know what the original password really was, as long as it produces the same hash. 

    A rainbow table works by doing a cryptanalysis very quickly and effectively. Unlike bruteforce attack, which works by calculating the hash function of every string present with them, calculating their hash value and then compare it with the one in the computer, at every step. A rainbow table attack eliminates this need by already computing hashes of the large set of available strings.

    There are two main steps in this: 
        Creating a Table 
        Here, the hash of a string is taken and then reduced to create a new string, which is reduced again, repeatedly. For example, let’s create a table of the most common password, 12345678, using MD5 hash function on first 8 characters: 

        First we take the string and pass it through md5 hash function. 
            hashMD5(12345678) = 25d55ad283aa400af464c76d713c07ad

        We reduce the hash by taking only the first 8 characters. Then, we re-hash it. 
            hashMD5(25d55ad2) = 5c41c6b3958e798662d8853ece970f70

            This is repeated until enough hashes in output chain. This represents one chain, which starts from the first plain text and ends at the last hash.
            After obtaining enough chains, we store them in a table.

        Starting off with the hashed text (the password) its checked if it exists in the database. If so, go to the start of the chain and start hashing until there is a match. As soon as the match is obtained, the process ceases and the authentication is cracked.


Cyber Sources ---> 
    - OWASP (open web application security project)
        - an online community dedicated to cyber defense methods specifically related to the web.
    - MITRE 
        - a US non-profit organizationthat conducts a massive amount of federally funded cyber defense research.
        - MITRE ATT&CK Framework is "the free, globally accessible service that offers comprehensive and current cyber security threat information.
    - NIST (national institute of standards and technology)
        - non-regulatory agency of the US department of commerce.
        - NIST special publication 800-53 provides a comprehensive catalog of security and privacy controls for information systems and organization.


Cyber Security Current Events ---> 
    - Ashley Madison
    - 2019 facebook breach
    - Broadvoice Breach


DDOS Attack ---> (distributed denial-of-service)
    - a malicious attempt to distrupt normal traffic to a web property.
    - too many requests to overload server.
    - a cybercrime in which the attacker floods a server with internet traffic to prevent users from accessing connected online services and sites.
    - A DDoS attack occurs when a threat actor uses resources from multiple, remote locations to attack an organization’s online operations. Usually, DDoS attacks focus on generating attacks that manipulate the default, or even proper workings, of network equipment and services (e.g., routers, naming services or caching services).