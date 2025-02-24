// components/IntroVideo.tsx

export default function IntroVideo() {
  return (
    <video
      className="w-full h-full object-cover"
      src="/tutorial/tutorial_sample.mp4"
      autoPlay
      loop
      muted
    />
  );
}
