import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
    .from('test')
    .select('*')

  console.log(data)
  console.log(error)

  return (
    <div>
      Hello Supabase
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </div>
  )
}