export default function WhyEncrypt() {
	return <div> 
		  <p>
          Generally speaking, encryption is a protocol that controls information retrieval 
          from content. Without encryption, information is exclusively protected 
          by access control to the content. For example, if Alice does not want Bob to know a secret then 
          she has to make sure Bob never gains access to the secret, e.g., Alice can never talk about her secret 
          near Bob or document her secret on media that Bob could access, etc.... Encryption provides Alice
          with an added layer of security. If Alice encrypts her secret then she does not have to worry about 
          Bob gaining access to it. When Bob reads the encrypted secret the true secret is hidden from him.
          All Bob knows is that there exists some piece of information out that he cannot access.
          </p>
          <p>
          While Alice's encryption scheme has to hide her secret from Bob it also has to keep the secret
          accessible to Alice. Imagine if Alice's secret is the number <math>13</math> and her encryption
          process transforms <math>13</math> into <math>1,326,545</math>. Bob may find the encrypted number
          to be meaningless but Alice is going to need a decryption
          algorithm that lets her recover her secret from the encrypted value. Encryption schemes
          must allow trusted parties to recover the original information while masking the 
          information from everyone else.
          </p>
          <p>
          In addition to protecting her secrets Alice may also want to exchange secret content with other parties
          . For example, Alice's friend Susie may
          want to send a message to Alice that is encrypted to Bob but Alice can decipher. Encryption often 
          needs to support communication between multiple parties.
          </p>
          <p>
          Lastly, consider the scenario where Bob and Alice aren't adversaries but 
          instead need to collaborate in a secure way. For example, imagine Bob and Alice both have
          a secret and they want to know only if their secrets are the same (i.e., just a boolean true/false) 
          without divulging their true secrets. Sometimes encryption 
          needs to allow partial information to be accessible to collaborating parties.
          </p>
          <p>
          In summary a typical encryption protocol has several critical requirements:
          <ul className="pure-list">
            <li>Mask information from the unauthorized even when they have access to content</li>
            <li>Enable secure communication between multiple parties</li>
            <li>Enable collaboration between multiple parties while still protecting sensitive information</li>
          </ul>
          </p> 
          </div>
}