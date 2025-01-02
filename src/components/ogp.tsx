import { ImageResponse } from "@vercel/og"

export const getOgpImageResponse = async (params: {
  title: string
  categories: string[]
}): Promise<Response> => {
  return new ImageResponse(
    (
      <div
        lang="ja-JP"
        style={{
          width: "100%",
          height: "100%",
          background: "#e3effc",
          position: "relative",
          padding: "32px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* アバターイメージを薄くして背景に配置 */}
        <img
          width="330px"
          height="330px"
          src={`https://github.com/Loliver1224.png`}
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            opacity: 0.2,
          }}
        />
        {/* カテゴリーエリア */}
        {/* <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          {params.categories.map((category, index) => (
            <div
              key={index}
              style={{
                padding: "4px 8px",
                border: "1px solid #4f46e5",
                borderRadius: "4px",
                fontSize: "24px",
                color: "#4f46e5",
                background: "white",
              }}
            >
              {category}
            </div>
          ))}
        </div> */}

        {/* タイトルエリア */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "160px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#1e1b4b",
              textAlign: "center",
              margin: 0,
            }}
          >
            {params.title}
          </h1>
        </div>

        {/* 著者エリア */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "12px",
            height: "32px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              color: "#4f46e5",
            }}
          >
            {"Loliver's Landscape"}
          </div>
        </div>
      </div>
    ),
    {
      width: 600,
      height: 330,
    },
  )
}
