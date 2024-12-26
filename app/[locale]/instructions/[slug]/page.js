import Rec from '../../components/Instructions/Rec'
import Banner from '../../components/Instructions/slug/Banner'
import InstructionBody from '../../components/Instructions/slug/InstructionBody'
import OtherInstructions from '../../components/Instructions/slug/OtherInstructions'

export default function page() {
  return (
    <div className='w-full flex flex-col gap-48 bg-white pb-48'>
      <Banner />
      <Rec />
      <InstructionBody />
      <OtherInstructions />
    </div>
  )
}
