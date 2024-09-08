"use client"
import { useQRCode } from 'next-qrcode';

export default function Quiz() {

    const { Canvas } = useQRCode();
    return (
        <div className="flex flex-row">
        <div className="basis-1/2">
                <Canvas
                text={'https://github.com/bunlong/next-qrcode'}
                options={{
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                dark: '#010599FF',
                light: '#FFBF60FF',
                },
            }}
            />
        </div>
        <div className="basis-1/4">02</div>
      </div>
    );
  }