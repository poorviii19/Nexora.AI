import { useEffect, useState } from 'react'
import { Gem, Sparkles } from 'lucide-react'
import { dummyCreationData } from '../assets/assets'
import { useUser } from '@clerk/react'
import CreationItem from '../components/CreationItem'

const Dashboard = () => {

  const [creations, setCreations] = useState([])

  const getDashboardData = async ()=>{
    setCreations(dummyCreationData)
  }
  
  const {user} = useUser()

  const isPremium = user?.publicMetadata?.plan === 'premium'

  useEffect(()=>{
    getDashboardData()
  }, [])


  return (
    <div className= 'h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>
        {/* Total Creations card */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-sm'>
          <div className='text-slate-600'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold'>{creations.length}</h2>
          </div>
          <div className='w-10 h-10 rounded-lg bg-linear-to-br from-[#cf051d] to-[#f3551c] text-white flex justify-center items-center'>
            <Sparkles className='w-5 text-white' />
          </div>
        </div>

        {/*Active Plan Card  */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-sm'>
          <div className='text-slate-600'>
            <p className='text-sm'>Active Plan</p>
            <h2 className='text-xl font-semibold'>
              {isPremium ? 'Premium' : 'Free'} </h2>
          </div>
          <div className='w-10 h-10 rounded-lg bg-linear-to-br from-[#ff6198] to-[#eeb853] text-white flex justify-center items-center'>
            <Gem className='w-5 text-white' />
          </div>
        </div>
      </div>

      <div className='space-y-3'>
        <p className='mt-6 mb-4'> Recent Creations</p>
        {
          creations.map((item)=> <CreationItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}

export default Dashboard
