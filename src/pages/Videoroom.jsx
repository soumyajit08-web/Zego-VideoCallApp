import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

function Videoroom() {
  let { roomId } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const appID = 67947689;
    const serverSecret = "e5a504cfc025e3d6fbfc4e99b4a86a2e";

    if (!roomId) return;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Soumya das"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: "Copy link",
          url: `http://localhost:5175/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });

    // cleanup on unmount (prevents double join)
    return () => {
      zp.destroy();
    };
  }, [roomId]);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
}

export default Videoroom;
