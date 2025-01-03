import { ImageResponse } from "@vercel/og"
import { readFileSync } from "fs"
import { join } from "path"
import sharp from "sharp"

export const getOgpImageResponse = async (params: {
  title: string
}): Promise<Response> => {
  const imagePath = join(process.cwd(), "assets", "ogimage-base.png")

  const imageBuffer = readFileSync(imagePath)
  const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`

  const fontPath = join(process.cwd(), "assets", "NotoSansJP-Bold.ttf")
  const fontData = readFileSync(fontPath)

  const pngImage = await new ImageResponse(
    (
      <div
        lang="ja-JP"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${base64Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            padding: "64px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#004aad",
            fontFamily: '"NotoSansJP", sans-serif',
            fontSize: "64px",
            fontWeight: "bold",
            // サイズ違いのshadowを重ねて全方向へのshadowを表現
            textShadow:
              "0 0 1px #fff, 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 16px #fff",
          }}
        >
          {params.title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "NotoSansJP",
          data: fontData,
          style: "normal",
        },
      ],
    },
  ).arrayBuffer()

  const webpImage = await sharp(Buffer.from(pngImage))
    .webp({ quality: 70 })
    .toBuffer()

  return new Response(webpImage, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000", // キャッシュ設定(1年間)
    },
  })
}
