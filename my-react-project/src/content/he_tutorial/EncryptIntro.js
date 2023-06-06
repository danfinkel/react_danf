import encryption_main_opt from 'img/encryption_main_opt.svg';

export default function EncryptIntro() {
	return  <div>
      <img src={encryption_main_opt} height="90%" width="90%"/>
      <p> Homomorphic Encryption (HE) is an emerging technology 
          that has grown from academic theory to realized product over the past 
          15 or so years. HE extends traditional public-key encryption schemes so that
          computation can be performed on encrypted data and information about the
          calculations can be recovered after decryption.
      </p>
      <p> For this article we will walk through an example HE scheme with the goal to
          build intuition about the process and mechanics
          of how two parties can start thinking about encrypted collaboration. Along the way
          we will dip into the underlying algebraic theory of HE. When possible we will
          ground concepts in real examples. The calculations performed along the way will be
          documented and should be easy for the reader to reproduce.
      </p>
      <p> In assembling this article I am indebted to many others who have already 
          posted explainers about HE. The secret computing company Inpher has 
          a&nbsp;
          <a href="https://inpher.io/technology/what-is-fully-homomorphic-encryption/">great
          tutorial</a> online that influenced a lot of the content shown here.

      </p>
      </div>
};