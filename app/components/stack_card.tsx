import React, { ReactNode } from 'react'

const StackCard = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`stackCard ${className ?? ""}`}>
      {children}
    </div>
  )
}

export default StackCard
