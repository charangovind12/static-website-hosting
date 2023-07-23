<script>
    const scanSystemButton = document.getElementById('scan-system');
    const form = document.querySelector('form');
    form.style.display = 'none';
    scanSystemButton.addEventListener('click', async () => {
      const confirmed = confirm('This action will scan your entire system for malware. Do you want to proceed?');
      if (confirmed) {
        form.style.display = 'block';
        const response = await fetch('/scan-system');
        const result = await response.json();
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = result.message;
        if (result.isInfected) {
          resultsDiv.style.color = 'red';
        } else {
          resultsDiv.style.color = 'green';
        }
      }
    });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const response = await fetch('/scan-file', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      const resultsDiv = document.getElementById('results');
      resultsDiv.textContent = result.message;
      if (result.isInfected) {
        resultsDiv.style.color = 'red';
      } else {
        resultsDiv.style.color = 'green';
      }
    });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js"></script>

<script>
  // Initialize IPFS
  const ipfs = new window.Ipfs();

  // Add a file to IPFS
  ipfs.add("Hello World").then((result) => {
    console.log(result);
  });
</script>
<script>
  // Create a DID document
  const did = "did:example:123";
  const publicKey = {
    id: `${did}#keys-1`,
    type: "Secp256k1VerificationKey2018",
    controller: did,
    publicKeyHex: "03f19b..."
  };
  const didDoc = {
    "@context": "https://w3id.org/did/v1",
    id: did,
    publicKey: [publicKey]
  };

  // Sign a JWT with the DID document
  const jwt = didjwt.createJWT({ sub: "user@example.com" }, {
    alg: "ES256K-R",
    issuer: did,
    audience: "https://example.com",
    expiresIn: "1h"
  }, didDoc);

  // Verify the JWT
  const verified = didjwt.verifyJWT(jwt, {
    audience: "https://example.com",
    resolver: {
      resolve: (did) => Promise.resolve(didDoc)
    }
  });
</script>
