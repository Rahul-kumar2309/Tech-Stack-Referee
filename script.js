// Tech Stack Referee - Comparison Logic
const comparisons = {
    'realtime-chat': {
        tradeOff: 'Speed vs Structure',
        options: [
            {
                name: 'Node.js',
                pros: [
                    'Excellent WebSocket support',
                    'Fast, non-blocking I/O',
                    'Same language (JavaScript) for frontend and backend',
                    'Large ecosystem with Socket.io',
                    'Low latency for real-time features'
                ],
                cons: [
                    'Single-threaded limitations for CPU-intensive tasks',
                    'Callback complexity can lead to messy code',
                    'Less structured than framework-based solutions',
                    'Memory leaks possible with poor coding practices'
                ]
            },
            {
                name: 'Django',
                pros: [
                    'Robust framework with built-in features',
                    'Excellent ORM and admin interface',
                    'Strong security features out of the box',
                    'Well-structured MVC architecture',
                    'Django Channels for WebSocket support'
                ],
                cons: [
                    'Heavier framework with more overhead',
                    'Python GIL can limit concurrent connections',
                    'More complex setup for real-time features',
                    'Slower than Node.js for I/O operations'
                ]
            }
        ]
    },
    'ecommerce': {
        tradeOff: 'Consistency vs Flexibility',
        options: [
            {
                name: 'SQL (PostgreSQL/MySQL)',
                pros: [
                    'ACID compliance ensures data consistency',
                    'Strong relationships and foreign keys',
                    'Mature ecosystem with excellent tooling',
                    'Complex queries with JOINs',
                    'Proven reliability for financial transactions'
                ],
                cons: [
                    'Rigid schema requires migrations for changes',
                    'Vertical scaling can be expensive',
                    'Less flexible for varying product attributes',
                    'Complex setup for high availability'
                ]
            },
            {
                name: 'MongoDB',
                pros: [
                    'Flexible schema for diverse product catalogs',
                    'Horizontal scaling built-in',
                    'JSON-like documents easy to work with',
                    'Fast reads and writes for simple queries',
                    'Great for content management and catalogs'
                ],
                cons: [
                    'No ACID transactions across documents (historically)',
                    'Potential data inconsistency issues',
                    'Memory usage can be high',
                    'Less mature tooling for complex analytics',
                    'Requires careful design for relationships'
                ]
            }
        ]
    },
    'data-science': {
        tradeOff: 'General Purpose vs Statistical Specialization',
        options: [
            {
                name: 'Python',
                pros: [
                    'Huge ecosystem (pandas, scikit-learn, TensorFlow)',
                    'General-purpose language for full applications',
                    'Excellent visualization libraries (matplotlib, seaborn)',
                    'Strong community and learning resources',
                    'Great for machine learning and AI'
                ],
                cons: [
                    'Slower execution than compiled languages',
                    'Package management can be complex',
                    'Not specifically designed for statistics',
                    'Memory usage can be high for large datasets'
                ]
            },
            {
                name: 'R',
                pros: [
                    'Built specifically for statistical analysis',
                    'Exceptional statistical packages (CRAN)',
                    'Superior data visualization (ggplot2)',
                    'Interactive analysis with RStudio',
                    'Strong in academic and research communities'
                ],
                cons: [
                    'Steep learning curve for non-statisticians',
                    'Limited for general programming tasks',
                    'Memory limitations with large datasets',
                    'Slower adoption in industry compared to Python',
                    'Package quality can vary significantly'
                ]
            }
        ]
    }
};

// DOM elements
const useCaseSelect = document.getElementById('useCase');
const comparisonDiv = document.getElementById('comparison');
const tradeOffDiv = document.getElementById('tradeOff');
const tableBody = document.getElementById('tableBody');

// Event listener for use case selection
useCaseSelect.addEventListener('change', function() {
    const selectedUseCase = this.value;
    
    if (selectedUseCase && comparisons[selectedUseCase]) {
        showComparison(selectedUseCase);
    } else {
        hideComparison();
    }
});

function showComparison(useCase) {
    const comparison = comparisons[useCase];
    
    // Show trade-off
    tradeOffDiv.innerHTML = `<strong>Key Trade-off:</strong> ${comparison.tradeOff}`;
    
    // Clear and populate table
    tableBody.innerHTML = '';
    
    comparison.options.forEach(option => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="option-name">${option.name}</td>
            <td class="pros">
                <ul>
                    ${option.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </td>
            <td class="cons">
                <ul>
                    ${option.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Show comparison section
    comparisonDiv.classList.remove('hidden');
}

function hideComparison() {
    comparisonDiv.classList.add('hidden');
}