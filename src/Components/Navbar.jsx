import Logo from '../assets/Images/Logo.png'

function Navbar() {
  const NavItem = ["Home","About","Solutions","Contact"]
  return (
    <>
    <div className='bg-[#ff1010] h-[105px] pl-44 pr-44 flex'>
      <div className='w-24 h-24'>
        <a href="#">
          <img src={Logo} alt="IPMRLogo" />
        </a>
      </div>
      {NavItem.map(item=>(
        <div key={item}>{item}</div>
      ))}
    </div>
    <div>
      <p className='w-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium porro neque quas dolorum sint delectus possimus, dignissimos incidunt, deserunt voluptate repellat autem corrupti veniam aliquid dolore obcaecati sunt pariatur rerum?</p>
    </div>
    </>
  )
}


export default Navbar