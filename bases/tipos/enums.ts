;(() => {
  enum AudioLevel {
    min,
    medium,
    max,
  }

  const currentAudio: AudioLevel = AudioLevel.medium

  console.log(currentAudio)
  console.log(AudioLevel)

  // ------------------------------
  enum AudioLevel1 {
    min = 1,
    medium,
    max = 10,
  }

  const currentAudio1: AudioLevel1 = AudioLevel1.medium

  console.log(currentAudio1)
  console.log(AudioLevel1)
})()
