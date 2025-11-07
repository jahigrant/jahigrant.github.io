# context_processors.py
from django.conf import settings
from django.views.static import serve


def site_data_variables(request):
    return {
        'site_name':            'jahigrant',
        'site_fname':           'jahigrant',
        'founded':              '2020',
        'site_desc':            'is a DeFi platform to purchase UK residential & commercial property, in order to renovate, refurbish or construct for sale or rental giving your investors total control over every aspect of the process.',
        'strapline':            'Invest in property and control the investment',
        'purpose':              'Property investment through DeFi and tokenization',
        'ethos':                'Community, Profit, Investment',
        'site_author':          'Jahi',
        'site_author_desc':     'jahigrant Founder and CEO',
        'site_address':         '123 Main Street, City, Country',
        'site_phone':           '+441234567890',
        'site_url':             'http://127.0.0.1:8000',
        'site_static_url':      'http://127.0.0.1:8000/static',
        'site_theme_colour_01': '#063266',
    }

# controls the html page title update
def site_page_title(request):
    return {
        'site_page_title': request.resolver_match.url_name if request.resolver_match else None
    }

def companies_data_variables(request):
    companies = [
        {
            'parent_company': 'PC Holding',
            'subsidiaries': [
                {
                    'name':             'jahigrant',
                    'fullname':         'jahigrant',
                    'description':      'Crowdfund to buy and renovate local pubs into hotels, retaining the pub as the bar, using permitted development planning permission. Preserve community hubs, create jobs, and boost local economies. Contribute now and help save our beloved pubs!',
                    'strapline':        'Invest in the Pub, Invest in the Community',
                    'purpose':          'Pub Ownership Through Equity Lending',
                    'ethos':            'Community, Preservation, Investment',
                    'founded':          '2020',
                    'founder':          'Jahi Grant',
                    'address':          '456 Side Street, City, Country',
                    'phone':            '+441987654321',
                    'url':              'http://127.0.0.1:8000/pcnft/',
                    'subsidiaries': []
                },
            ]
        },
    ]
    return {
        'companies': companies
    }

def user_profile(request):
    """
    Adds `profile` and a safe display name for authenticated users.
    """
    profile = None
    display_name = ""
    if request.user.is_authenticated:
        try:
            # Adjust attribute if your related_name differs
            profile = request.user.profile
            # Prefer a method/property if it exists
            if hasattr(profile, "get_preferred_display_name"):
                display_name = profile.get_preferred_display_name
            elif hasattr(profile, "preferred_name"):
                display_name = profile.preferred_name
            else:
                display_name = request.user.get_username()
        except Exception:
            display_name = request.user.get_username()

    return {
        "profile": profile,
        "profile_display_name": display_name,
    }