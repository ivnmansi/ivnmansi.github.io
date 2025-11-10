import { useEffect, useState } from 'react'
import './lastPlayed.css'

const URL = 'https://lastfm-last-played.biancarosa.com.br/abbokado/latest-song'

export default function LastPlayed() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const ctrl = new AbortController()

    const load = async () => {
      try {
        if (!active) return

        setLoading(true)
        setError(null)

        const res = await fetch(URL, { signal: ctrl.signal, headers: { accept: 'application/json' } })

        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = await res.json()

        if (!active) return

        setData(json)

      }
      catch (e: any) {
        if (e?.name === 'AbortError') return
        if (!active) return
        setError(e?.message ?? 'Error while loading')
      }
      finally {
        if (active) setLoading(false)
      }
    }

    load()
    const t = setInterval(load, 60000)
    return () => {
      active = false
      ctrl.abort()
      clearInterval(t)
    }
  }, [])

  if (loading) return <div>Loading…</div>
  if (error) return <div>Error: {error}</div>
  if (!data?.track) return null

  const track = data.track
  const songName = track?.name ?? '—'
  const artistName =
    typeof track?.artist['#text'] === 'string' ? track.artist['#text'] : track?.artist?.name ?? '—'
  const albumArt =
    (track?.image ?? []).find((img: any) => img?.size === 'large')?.['#text'] ||
    track?.image?.[0]?.['#text'] ||
    ''

  return (
    <>
      <h3><i className="fa-solid fa-music"></i> Last played song</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
        {albumArt ? (
          <img src={albumArt} alt={songName} width={48} height={48} style={{ borderRadius: 6 }} />
        ) : null}
        <div className='song-info'>
          <div><strong>{songName}</strong></div>
          <div style={{ color: 'var(--text-muted)' }}>{artistName}</div>
        </div>
      </div>
    </>
  )
}