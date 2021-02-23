import moment from 'moment'
import FormatDate from '../interfaces/formatDateInterface'

export default ({
    createdAt,
    updatedAt
}: {
    createdAt: string
    updatedAt: string
}): FormatDate => {
    let formatedCreatedAt: string | null = null
    let formatedUpdatedAt: string

    if (!createdAt.includes('/')) {
        formatedCreatedAt = moment(parseInt(createdAt, 10)).format(
            'YYYY/MM/DD H:m:s'
        )
    }
    formatedUpdatedAt = moment(parseInt(updatedAt, 10)).format(
        'YYYY/MM/DD H:m:s'
    )

    return {
        formatedCreatedAt,
        formatedUpdatedAt
    }
}
