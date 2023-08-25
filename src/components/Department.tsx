interface DepartmentInfo {
  name: string;
  imageUrl: string;
}
const Department: React.FC  = () => {
  const departments: DepartmentInfo[] = [
    { name: 'Orthopedics', imageUrl:'https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afca386e2a8329a840320_orthopedicswhite.png'},
    { name: 'Sports Medicine', imageUrl: 'https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afcb041b48ced5d913f38_sports%20medicinewhite.png'},
    { name:'Neuro surgery', imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afcb705fb1d356af6d72b_neurologywhite.png"},
    {name:'General Surgery', imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afcc481809a90314fd091_General%20surgerywhite.png"},
    {name:'Cardiothoracic Surgery', imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afccfc6ace104c76af6f1_cardiothoracic%20surgerywhite.png"},
    {name:'Urology', imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afcdbcddb474e82f29ab1_urologywhite.png"},
    {name:'OByn', imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afd043a677bd220995f58_OBGYNwhite.png"},
    {name:'Pediatrics',imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afd2bc9005971ae4fab60_pediatricswhite.png"},
    {name:'Internal Medicine', imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afd3a42612109113575bd_internal%20medicinewhite.png"},
    {name:'Colon Rectal',imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afd45b8098b29c3886148_colon%20%26%20rectalwhite.png"},
    {name:'Otolaryngology',imageUrl:  "https://assets.website-files.com/5c684b9b3ca6bd0806344114/5f2afce56d5db483915881b7_otolaryngologywhite.png"}
  ]
    
  return (
    <div className='department_container'>
      <div className='circle-container'>
        {departments.map((department, index) => (
          <div key={index} className='department-item'>
            <img className='department-icon' src={department.imageUrl} alt={department.name} />
            <p className='department-name'>{department.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Department;