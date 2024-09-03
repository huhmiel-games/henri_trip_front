export function getRole()
{
    const role = sessionStorage.getItem('role')
    
    if (role)
    {
        return +role
    }

    return null
}