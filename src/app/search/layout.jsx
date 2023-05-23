import SearchHeader from '@/components/SearchHeader'
import SearchHeaderoptions from '@/components/SearchHeaderoptions'

export default function SearchLayout({ children }) {
  return (
    <>
        <SearchHeader/>
        <SearchHeaderoptions/>
        {children}
    </>
  )
}
