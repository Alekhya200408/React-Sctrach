import React from 'react'
import Cards from './components/Cards'

const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/4tYrxIDntr8hscsxnFmdsCrYd6NO3C0NeYAfkA94LkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b193ZWJwLHFfZ2xv/c3N5LHJldF9pbWcs/d183MDAsaF80MDAv/aHR0cDovL2Fzc2V0/cy5kZXNpZ25oaWxs/LmNvbS9kZXNpZ24t/YmxvZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMi8zLTIu/cG5n",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full-Time",
    tag2: "Senior-Level",
    pay: "$85/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/KvkePuTrHTCF2cJEnwFbpPTy26zdZaawwZ5YREkpQKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/OTUzLzAwMC9zbWFs/bC9hbWF6b24tcGF5/LWxvZ28tZnJlZS1w/bmcucG5n",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full-Time",
    tag2: "Junior-Level",
    pay: "$68/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/zx7cxNMKmQOnZfpcwQbaxGEQVAHp_m6pV_e2gqJCE1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzIwNy9zbWFs/bC9tZXRhLWxvZ28t/cm91bmRlZC1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid-Level",
    pay: "$82/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wiHBIhMvkq0xaFH05oJyyhLegttg5bxKwQ4UhVZyDSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZnVs/bC1oZC1hcHBsZS1v/bi1ncmV5LXMyemZr/MTFtZWdlN3J1cGcu/anBn",
    company: "Apple",
    datePosted: "10 days ago",
    post: "iOS Software Engineer",
    tag1: "Full-Time",
    tag2: "Senior-Level",
    pay: "$95/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/dYJ4Ff1nLOTLfaeXgLoc9eM8j2h3iRtBe0Impl2HGK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L05ldGZsaXhf/MjAxNl9OX2xvZ28u/c3Zn",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$90/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full-Time",
    tag2: "Senior-Level",
    pay: "$105/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Hybrid",
    tag2: "Mid-Level",
    pay: "$78/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior-Level",
    pay: "$72/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior-Level",
    pay: "$88/hr",
    location: "Remote"
  }
];
console.log(jobOpenings);

function App() {
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem,idx) {
        return <div key={idx}>
          <Cards  logo={elem.brandLogo}  company={elem.company} datepost={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App