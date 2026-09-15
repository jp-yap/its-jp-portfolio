import React from 'react'

const minecraftColors: Record<string, string> = {
  '0': '#000000',
  '1': '#0000AA',
  '2': '#00AA00',
  '3': '#00AAAA',
  '4': '#AA0000',
  '5': '#AA00AA',
  '6': '#FFAA00',
  '7': '#AAAAAA',
  '8': '#555555',
  '9': '#5555FF',
  'a': '#55FF55',
  'b': '#55FFFF',
  'c': '#FF5555',
  'd': '#FF55FF',
  'e': '#FFFF55',
  'f': '#FFFFFF',
}

type TextSegment = {
  text: string
  color: string
}

const parseMinecraftText = (text: string): TextSegment[] => {

  const normalizedText = text.replace(/\\n/g, '\n')

  const parts = normalizedText.split(/(&[0-9a-f])/gi)

  let color = '#FFFFFF'
  const segments: TextSegment[] = []

  for (const part of parts) {
    if (/^&[0-9a-f]$/i.test(part)) {
      color = minecraftColors[part[1].toLowerCase()]
      continue
    }

    segments.push({
      text: part,
      color,
    })
  }

  return segments
}

const TextColor = ({ text }: { text: string }) => {
  const segments = parseMinecraftText(text)

  return (
    <>
      {segments.map((segment, index) => {
        const lines = segment.text.split('\n')

        return (
          <React.Fragment key={index}>
            {lines.map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                <span style={{ color: segment.color }}>
                  {line}
                </span>

                {lineIndex < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default TextColor