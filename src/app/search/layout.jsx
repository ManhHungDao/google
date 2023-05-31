import SearchHeader from '@/components/SearchHeader'
import SearchHeaderOptions from '@/components/SearchHeaderOptions'

export default function SearchLayout({ children }) {
  return (
    <>
        <SearchHeader/>
        <SearchHeaderOptions/>
        {children}
    </>
  )
}
