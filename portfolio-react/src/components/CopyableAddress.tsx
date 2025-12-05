import { useState } from 'react';
import './CopyableAddress.css';

interface CopyableAddressProps {
  address: string;
}

const CopyableAddress = ({ address }: CopyableAddressProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy address');
    }
  };

  return (
    <p className="copyable-address" onClick={handleCopy} title="Click to copy">
      {address}
      {copied && <span className="copied-tooltip"> ✓ Copied!</span>}
    </p>
  );
};

export default CopyableAddress;
